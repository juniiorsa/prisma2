export declare class CreateDocumentDto {
    formulario_id: string;
    titulo: string;
    natureza: string;
    problema: string;
    resultados: string;
    etp_referencia?: string;
}
declare class CotaDto {
    fonte: string;
    valor: number;
}
export declare class PriceStepDto {
    tr_id: string;
    cotas: CotaDto[];
}
export declare class JustificativaStepDto {
    tr_id: string;
    solucao_proposta: string;
    solucoes_alternativas: string[];
}
export declare class FiscalizacaoStepDto {
    tr_id: string;
    fiscais: string[];
    periodicidade: string;
    ferramentas: string;
    criterios: string;
}
export declare class FinalizeTrDto {
    tr_id: string;
}
export declare class ExportDto {
    tr_id: string;
}
export declare class UpdateDocumentDto {
    titulo?: string;
    estrutura_tr?: any;
}
export {};
