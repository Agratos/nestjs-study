import { Module } from '@nestjs/common';
import { BoardsController } from './board.controller';
import { BoardsService } from './boards.service';

@Module({
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
