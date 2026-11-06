import { Module } from '@nestjs/common';
import { ProjetosController } from './projetos.controller';
import { ProjetosService } from './projetos.service';

// Um módulo agrupa um recurso: aqui, o controller e o service de "projetos".
@Module({
  controllers: [ProjetosController],
  providers: [ProjetosService],
})
export class ProjetosModule {}
