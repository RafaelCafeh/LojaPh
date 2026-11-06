import { PartialType } from '@nestjs/mapped-types';
import { CreateProjetoDto } from './create-projeto.dto';

// PartialType reaproveita os campos (e as validações) de CreateProjetoDto,
// tornando todos opcionais para a edição.
export class UpdateProjetoDto extends PartialType(CreateProjetoDto) {}
