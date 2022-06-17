import { Module } from '@nestjs/common';
import { ViewModule } from './view/view.module';

@Module({
  imports: [
    // ViewModule should always be imported last
    ViewModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
