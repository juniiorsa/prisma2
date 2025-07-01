import { IsString, IsNotEmpty, IsArray, ValidateNested, IsNumber, IsOptional, IsObject } from 'class-validator';
import { Type } from 'class-transformer';

// DTO para a criação inicial de um documento (Etapa 1)
export class CreateDocumentDto {
  @IsString()
  @IsNotEmpty()
  formulario_id: string; // Será o futuro tr_id

  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsString()
  @IsNotEmpty()
  natureza: string;

  @IsString()
  @IsNotEmpty()
  problema: string;

  @IsString()
  @IsNotEmpty()
  resultados: string;

  @IsString()
  @IsOptional()
  etp_referencia?: string;
}

// DTO para a sub-etapa de cotação de preços
class CotaDto {
    @IsString()
    @IsNotEmpty()
    fonte: string;

    @IsNumber()
    valor: number;
}

// DTO para a etapa de análise de preços
export class PriceStepDto {
    @IsString()
    @IsNotEmpty()
    tr_id: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CotaDto)
    cotas: CotaDto[];
}

// DTO para a etapa de justificativa da solução
export class JustificativaStepDto {
    @IsString()
    @IsNotEmpty()
    tr_id: string;
    
    @IsString()
    @IsNotEmpty()
    solucao_proposta: string;

    @IsArray()
    @IsString({ each: true })
    solucoes_alternativas: string[];
}

// DTO para a etapa de plano de fiscalização
export class FiscalizacaoStepDto {
    @IsString()
    @IsNotEmpty()
    tr_id: string;

    @IsArray()
    @IsString({ each: true })
    fiscais: string[];

    @IsString()
    @IsNotEmpty()
    periodicidade: string;
    
    @IsString()
    @IsNotEmpty()
    ferramentas: string;
    
    @IsString()
    @IsNotEmpty()
    criterios: string;
}

// DTO para a etapa final de geração do TR
export class FinalizeTrDto {
    @IsString()
    @IsNotEmpty()
    tr_id: string;
}

// DTO para a exportação de documentos (PDF/DOCX)
export class ExportDto {
    @IsString()
    @IsNotEmpty()
    tr_id: string;
}

// DTO para a atualização de um documento (edição no canvas)
export class UpdateDocumentDto {
    @IsString()
    @IsOptional()
    titulo?: string;

    @IsObject()
    @IsOptional()
    estrutura_tr?: any; // Usamos 'any' para flexibilidade com o JSONB do Prisma
}


