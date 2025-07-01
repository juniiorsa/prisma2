import { DocumentsService } from './documents.service';
import { CreateDocumentDto, PriceStepDto, JustificativaStepDto, FiscalizacaoStepDto, FinalizeTrDto, UpdateDocumentDto } from './dto/documents.dto';
export declare class DocumentsController {
    private readonly documentsService;
    constructor(documentsService: DocumentsService);
    listDocuments(req: any): Promise<{
        id: string;
        userId: string;
        title: string;
        status: string;
        currentPhase: string | null;
        structure: import("@prisma/client/runtime/library").JsonValue;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getDocument(id: string, req: any): Promise<{
        id: string;
        userId: string;
        title: string;
        status: string;
        currentPhase: string | null;
        structure: import("@prisma/client/runtime/library").JsonValue;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createNewDocument(createDto: CreateDocumentDto, req: any): Promise<any>;
    updateDocument(id: string, updateData: UpdateDocumentDto, req: any): Promise<{
        id: string;
        userId: string;
        title: string;
        status: string;
        currentPhase: string | null;
        structure: import("@prisma/client/runtime/library").JsonValue;
        createdAt: Date;
        updatedAt: Date;
    }>;
    processPricesStep(priceDto: PriceStepDto, req: any): Promise<any>;
    processJustificativaStep(justDto: JustificativaStepDto, req: any): Promise<any>;
    processFiscalizacaoStep(fiscDto: FiscalizacaoStepDto, req: any): Promise<any>;
    finalizeTR(finalizeDto: FinalizeTrDto, req: any): Promise<any>;
}
