import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsOptional } from 'class-validator';
import { CreateTarefaDto } from './create-tarefa.dto';

// PartialType reaproveita os campos (e as validações) de CreateTarefaDto,
// tornando todos opcionais. A edição também pode enviar "concluida".
export class UpdateTarefaDto extends PartialType(CreateTarefaDto) {
  @IsOptional()
  @IsBoolean({ message: 'O campo concluida deve ser verdadeiro ou falso.' })
  concluida?: boolean;
}
