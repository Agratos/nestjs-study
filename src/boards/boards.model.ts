// interface: 변수 타입만 체크
// classes: 변수 타입 + 인스턴스 생성

// export interface Board {
//   id: string;
//   title: string;
//   description: string;
//   status: BoardStatus;
// }

export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
