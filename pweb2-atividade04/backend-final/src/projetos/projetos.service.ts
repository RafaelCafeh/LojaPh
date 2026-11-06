import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjetoDto } from './dto/create-projeto.dto';
import { UpdateProjetoDto } from './dto/update-projeto.dto';
import { Projeto } from './entities/projeto.entity';

@Injectable()
export class ProjetosService {
   private projetos: Projeto[] = [
      { id: 1, nome: 'Backend com Nest.js', descricao: 'Módulos, controllers e services', cor: 'azul'},
      { id: 2, nome: 'Portfólio pessoal', descricao: 'Site para apresentar meus projetos', cor: 'roxo'},
      { id: 3, nome: 'Sistema de tarefas', descricao: 'Aplicação para organizar atividades', cor: 'verde'},
    ];

    private proximoId = 4;

  findAll(): Projeto[] {
      return this.projetos;
  }

  findOne(id: number): Projeto {
    const projeto = this.projetos.find((p) => p.id === id);
    if (!projeto) {
      throw new NotFoundException('Projeto não encontrada');
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

  Object.assign(projeto, dto);

  return projeto;
}

  remove(id: number): void {
  const projeto = this.findOne(id);

  this.projetos = this.projetos.filter(
    (p) => p.id !== projeto.id
  );
  }
}