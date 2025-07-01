import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateDocumentDto } from './dto/documents.dto';
export declare class DocumentsService {
    private readonly httpService;
    private readonly configService;
    private readonly prisma;
    private readonly N8N_ROUTER_URL;
    constructor(httpService: HttpService, configService: ConfigService, prisma: PrismaService);
    listDocuments(userId: string): Promise<{
        id: string;
        userId: string;
        title: string;
        status: string;
        currentPhase: string | null;
        structure: import("@prisma/client/runtime/library").JsonValue;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getDocumentById(docId: string, userId: string): Promise<{
        id: string;
        userId: string;
        title: string;
        status: string;
        currentPhase: string | null;
        structure: import("@prisma/client/runtime/library").JsonValue;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateDocument(docId: string, userId: string, data: UpdateDocumentDto): Promise<{
        id: string;
        userId: string;
        title: string;
        status: string;
        currentPhase: string | null;
        structure: import("@prisma/client/runtime/library").JsonValue;
        createdAt: Date;
        updatedAt: Date;
    }>;
    callN8NWebhook(path: string, payload: any): Promise<any>;
}
