import { Get, Controller } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/api/message')
  name() {
    return {
      message: 'hello world!!!!',
    };
  }
}
