import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './modules/post/post.module';
import { DatabaseModule } from './database/database.module';
import { ScrappModule } from './scrapp/scrapp.module';

@Module({
  imports: [PostModule, DatabaseModule, ScrappModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
