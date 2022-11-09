import { ScrappService } from './scrapp.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('scrapp')
export class ScrappController {
  constructor(private readonly scrappService: ScrappService) {}

  @Get('/all')
  async scrappAllProducts() {
    return await this.scrappService.scrappAllProducts();
  }

  @Get(':id')
  async scrappById(@Param('id') id: string) {
    return await this.scrappService.scrapById(id);
  }
}
