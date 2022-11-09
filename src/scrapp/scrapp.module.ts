import { Module } from '@nestjs/common';
import { ScrappController } from './scrapp.controller';
import { ScrappService } from './scrapp.service';

@Module({
  controllers: [ScrappController],
  providers: [ScrappService],
})
export class ScrappModule {}
