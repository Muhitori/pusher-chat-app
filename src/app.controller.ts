import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  app() {
    return { message: 'Hello world!' };
  }
}
