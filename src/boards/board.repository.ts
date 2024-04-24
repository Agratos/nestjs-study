import { Board } from './board.entity';
import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

// 데이터 저장하는 부분
@Injectable()
export class BoardRepository extends Repository<Board> {
  constructor(dataSource: DataSource) {
    super(Board, dataSource.createEntityManager());
  }

  async getBoardById(id: number) {
    return await this.findOneBy({ id });
  }
}
