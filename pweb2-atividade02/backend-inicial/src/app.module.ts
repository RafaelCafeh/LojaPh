import { Module } from '@nestjs/common';
import { ProjetosModule } from './projetos/projetos.module';
import { TarefasModule } from './tarefas/tarefas.module';

// Módulo raiz da aplicação. Ele apenas importa os outros módulos.
@Module({
  imports: [TarefasModule, ProjetosModule],
})
export class AppModule {}
