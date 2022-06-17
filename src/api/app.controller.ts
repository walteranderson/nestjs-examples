import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class AppController {
  // putting this in the same controller for convience
  @Get('/api/name')
  name() {
    return {
      name: 'John Doe',
    };
  }

  // this would be more appropriate in a `view.controller` or something
  @Get('*')
  @Render('index')
  root() {
    //
  }
}
