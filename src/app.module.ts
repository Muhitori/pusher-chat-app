import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MessageModule } from './message/message.module';

@Module({
  imports: [MessageModule],
  controllers: [AppController],
})
export class AppModule {}
