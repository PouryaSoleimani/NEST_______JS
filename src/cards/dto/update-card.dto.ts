import { PartialType } from '@nestjs/swagger';
import { CreateCarDto } from './create-card.dto';


export class UpdateCardDto extends PartialType(CreateCarDto) {}
