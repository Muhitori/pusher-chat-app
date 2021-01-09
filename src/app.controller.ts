import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
  @Get()
  app(@Res() res: Response) {
    res.render('index');
  }
}
