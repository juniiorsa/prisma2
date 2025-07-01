import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { DocumentsController } from './documents.controller';
import { DocumentsService } from './documents.service';
import { S3Module } from '../s3/s3.module';

@Module({
  // ✅ O HttpModule é necessário para o DocumentsService fazer chamadas ao N8N
  imports: [HttpModule, S3Module],
  controllers: [DocumentsController],
  providers: [DocumentsService],
})
export class DocumentsModule {}
