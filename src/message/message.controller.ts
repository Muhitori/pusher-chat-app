import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private messageService: MessageService) {}

  @Post()
  async postMessage(@Body() body: any, @Res() res: Response) {
    this.messageService.addMessage(body);
    res.status(HttpStatus.OK).json({ message: 'comment posted successfully' });
  }
}
