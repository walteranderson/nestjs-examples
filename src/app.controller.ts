import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/api/name')
  name() {
    return {
      name: 'John Doe',
    };
  }

  @Get()
  @Render('*')
  root() {
    //
  }
}
