import { Controller, Post, Get, Body, Param, UseGuards, Request, Put } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { CreateDocumentDto, PriceStepDto, JustificativaStepDto, FiscalizacaoStepDto, FinalizeTrDto, ExportDto, UpdateDocumentDto } from './dto/documents.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('documentos')
@UseGuards(JwtAuthGuard)
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Get()
  async listDocuments(@Request() req) {
    const userId = req.user.userId;
    return this.documentsService.listDocuments(userId);
  }

  @Get(':id')
  async getDocument(@Param('id') id: string, @Request() req) {
    const userId = req.user.userId;
    return this.documentsService.getDocumentById(id, userId);
  }

  @Post('novo')
  async createNewDocument(@Body() createDto: CreateDocumentDto, @Request() req) {
    const payload = { ...createDto, usuario_id: req.user.userId };
    return this.documentsService.callN8NWebhook('webhook-formulario-novo-tr', payload);
  }
  
  @Put(':id/editar')
  async updateDocument(@Param('id') id: string, @Body() updateData: UpdateDocumentDto, @Request() req) {
    const userId = req.user.userId;
    return this.documentsService.updateDocument(id, userId, updateData);
  }

  @Post('etapa/precos')
  async processPricesStep(@Body() priceDto: PriceStepDto, @Request() req) {
    const payload = { ...priceDto, usuario_id: req.user.userId };
    return this.documentsService.callN8NWebhook('webhook-precos', payload);
  }

  @Post('etapa/justificativa')
  async processJustificativaStep(@Body() justDto: JustificativaStepDto, @Request() req) {
    const payload = { ...justDto, usuario_id: req.user.userId };
    return this.documentsService.callN8NWebhook('webhook-justificativa', payload);
  }

  @Post('etapa/fiscalizacao')
  async processFiscalizacaoStep(@Body() fiscDto: FiscalizacaoStepDto, @Request() req) {
    const payload = { ...fiscDto, usuario_id: req.user.userId };
    return this.documentsService.callN8NWebhook('webhook-fiscalizacao', payload);
  }
  
  @Post('finalizar-tr')
  async finalizeTR(@Body() finalizeDto: FinalizeTrDto, @Request() req) {
    const payload = { ...finalizeDto, usuario_id: req.user.userId };
    return this.documentsService.callN8NWebhook('webhook-finalizar-tr', payload);
  }
}


