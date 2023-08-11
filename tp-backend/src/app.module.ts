import { Module } from '@nestjs/common';
import { SongsController } from './app.controller';

//@ decorator symbol
@Module({
  imports: [],
  controllers: [SongsController],
  providers: [],
})
export class AppModule {}
