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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsController = void 0;
const common_1 = require("@nestjs/common");
const documents_service_1 = require("./documents.service");
const documents_dto_1 = require("./dto/documents.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let DocumentsController = class DocumentsController {
    constructor(documentsService) {
        this.documentsService = documentsService;
    }
    async listDocuments(req) {
        const userId = req.user.userId;
        return this.documentsService.listDocuments(userId);
    }
    async getDocument(id, req) {
        const userId = req.user.userId;
        return this.documentsService.getDocumentById(id, userId);
    }
    async createNewDocument(createDto, req) {
        const payload = { ...createDto, usuario_id: req.user.userId };
        return this.documentsService.callN8NWebhook('webhook-formulario-novo-tr', payload);
    }
    async updateDocument(id, updateData, req) {
        const userId = req.user.userId;
        return this.documentsService.updateDocument(id, userId, updateData);
    }
    async processPricesStep(priceDto, req) {
        const payload = { ...priceDto, usuario_id: req.user.userId };
        return this.documentsService.callN8NWebhook('webhook-precos', payload);
    }
    async processJustificativaStep(justDto, req) {
        const payload = { ...justDto, usuario_id: req.user.userId };
        return this.documentsService.callN8NWebhook('webhook-justificativa', payload);
    }
    async processFiscalizacaoStep(fiscDto, req) {
        const payload = { ...fiscDto, usuario_id: req.user.userId };
        return this.documentsService.callN8NWebhook('webhook-fiscalizacao', payload);
    }
    async finalizeTR(finalizeDto, req) {
        const payload = { ...finalizeDto, usuario_id: req.user.userId };
        return this.documentsService.callN8NWebhook('webhook-finalizar-tr', payload);
    }
};
exports.DocumentsController = DocumentsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DocumentsController.prototype, "listDocuments", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DocumentsController.prototype, "getDocument", null);
__decorate([
    (0, common_1.Post)('novo'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [documents_dto_1.CreateDocumentDto, Object]),
    __metadata("design:returntype", Promise)
], DocumentsController.prototype, "createNewDocument", null);
__decorate([
    (0, common_1.Put)(':id/editar'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, documents_dto_1.UpdateDocumentDto, Object]),
    __metadata("design:returntype", Promise)
], DocumentsController.prototype, "updateDocument", null);
__decorate([
    (0, common_1.Post)('etapa/precos'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [documents_dto_1.PriceStepDto, Object]),
    __metadata("design:returntype", Promise)
], DocumentsController.prototype, "processPricesStep", null);
__decorate([
    (0, common_1.Post)('etapa/justificativa'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [documents_dto_1.JustificativaStepDto, Object]),
    __metadata("design:returntype", Promise)
], DocumentsController.prototype, "processJustificativaStep", null);
__decorate([
    (0, common_1.Post)('etapa/fiscalizacao'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [documents_dto_1.FiscalizacaoStepDto, Object]),
    __metadata("design:returntype", Promise)
], DocumentsController.prototype, "processFiscalizacaoStep", null);
__decorate([
    (0, common_1.Post)('finalizar-tr'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [documents_dto_1.FinalizeTrDto, Object]),
    __metadata("design:returntype", Promise)
], DocumentsController.prototype, "finalizeTR", null);
exports.DocumentsController = DocumentsController = __decorate([
    (0, common_1.Controller)('documentos'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [documents_service_1.DocumentsService])
], DocumentsController);
//# sourceMappingURL=documents.controller.js.map