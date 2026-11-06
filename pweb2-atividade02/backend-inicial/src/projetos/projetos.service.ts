import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjetoDto } from './dto/create-projeto.dto';
import { UpdateProjetoDto } from './dto/update-projeto.dto';
import { Projeto } from './entities/projeto.entity';

// @Injectable marca a classe como um "provider" que o Nest injeta no controller.
@Injectable()
export class ProjetosService {
  // "Banco de dados" em memória (por enquanto). Some ao reiniciar o servidor.
  private projetos: Projeto[] = [
    { id: 1, nome: 'Portal do Aluno', descricao: 'Melhorias na área do estudante', cor: 'azul' },
    { id: 2, nome: 'App de Tarefas', descricao: 'Versão mobile do To-Do', cor: 'verde' },
  ];
  private proximoId = 3;

  findAll(): Projeto[] {
    return this.projetos;
  }

  findOne(id: number): Projeto {
    const projeto = this.projetos.find((p) => p.id === id);
    if (!projeto) {
      // NotFoundException vira automaticamente uma resposta HTTP 404.
      throw new NotFoundException('Projeto não encontrado');
    }
    return projeto;
  }

  create(dto: CreateProjetoDto): Projeto {
    const novo: Projeto = {
      id: this.proximoId++,
      nome: dto.nome,
      descricao: dto.descricao,
      cor: dto.cor,
    };
    this.projetos.push(novo);
    return novo;
  }

  update(id: number, dto: UpdateProjetoDto): Projeto {
    const projeto = this.findOne(id);
    Object.assign(projeto, dto); // atualiza apenas os campos enviados
    return projeto;
  }

  remove(id: number): void {
    const projeto = this.findOne(id);
    this.projetos = this.projetos.filter((p) => p.id !== projeto.id);
  }
}
