import { Module } from '@nestjs/common';
import { TarefasModule } from './tarefas/tarefas.module';
import { ProjetosModule } from './projetos/projetos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './data-source';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), TarefasModule, ProjetosModule,],
})
export class AppModule {}
