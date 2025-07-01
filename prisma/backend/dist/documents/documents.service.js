"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("../prisma/prisma.service");
let DocumentsService = class DocumentsService {
    constructor(httpService, configService, prisma) {
        this.httpService = httpService;
        this.configService = configService;
        this.prisma = prisma;
        this.N8N_ROUTER_URL = this.configService.get('N8N_WEBHOOK_URL');
    }
    async listDocuments(userId) {
        return this.prisma.documentoTR.findMany({
            where: { userId: userId },
            orderBy: { updatedAt: 'desc' },
        });
    }
    async getDocumentById(docId, userId) {
        const document = await this.prisma.documentoTR.findUnique({
            where: { id: docId },
        });
        if (!document) {
            throw new common_1.NotFoundException('Documento não encontrado.');
        }
        if (document.userId !== userId) {
            throw new common_1.ForbiddenException('Acesso negado.');
        }
        return document;
    }
    async updateDocument(docId, userId, data) {
        await this.getDocumentById(docId, userId);
        return this.prisma.documentoTR.update({
            where: { id: docId },
            data: {
                structure: data.estrutura_tr,
                title: data.titulo,
            },
        });
    }
    async callN8NWebhook(path, payload) {
        const url = `${this.N8N_ROUTER_URL}/${path}`;
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.post(url, payload));
            return response.data;
        }
        catch (error) {
            console.error('Erro ao comunicar com o N8N:', error.response?.data || error.message);
            throw new common_1.InternalServerErrorException('Falha na comunicação com o serviço de automação.');
        }
    }
};
exports.DocumentsService = DocumentsService;
exports.DocumentsService = DocumentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService,
        config_1.ConfigService,
        prisma_service_1.PrismaService])
], DocumentsService);
//# sourceMappingURL=documents.service.js.map