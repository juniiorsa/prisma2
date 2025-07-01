import { Injectable, InternalServerErrorException, NotFoundException, ForbiddenException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateDocumentDto } from './dto/documents.dto';

@Injectable()
export class DocumentsService {
  private readonly N8N_ROUTER_URL: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    this.N8N_ROUTER_URL = this.configService.get<string>('N8N_WEBHOOK_URL');
  }

  async listDocuments(userId: string) {
    return this.prisma.documentoTR.findMany({
      where: { userId: userId },
      orderBy: { updatedAt: 'desc' },
    });
  }

  async getDocumentById(docId: string, userId: string) {
    const document = await this.prisma.documentoTR.findUnique({
      where: { id: docId },
    });

    if (!document) {
      throw new NotFoundException('Documento não encontrado.');
    }
    if (document.userId !== userId) {
      throw new ForbiddenException('Acesso negado.');
    }
    return document;
  }
  
  async updateDocument(docId: string, userId: string, data: UpdateDocumentDto) {
    // Primeiro, verifica se o documento pertence ao usuário
    await this.getDocumentById(docId, userId); 
    
    return this.prisma.documentoTR.update({
        where: { id: docId },
        data: {
            structure: data.estrutura_tr,
            title: data.titulo,
            // atualizado_em pode ser atualizado por um trigger no DB ou aqui
        },
    });
  }

  async callN8NWebhook(path: string, payload: any): Promise<any> {
    const url = `${this.N8N_ROUTER_URL}/${path}`;
    try {
      const response = await firstValueFrom(this.httpService.post(url, payload));
      return response.data;
    } catch (error) {
      console.error('Erro ao comunicar com o N8N:', error.response?.data || error.message);
      throw new InternalServerErrorException('Falha na comunicação com o serviço de automação.');
    }
  }
}


