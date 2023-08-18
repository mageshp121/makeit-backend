export interface categoryType {
       category: string;
}
export class categoryEntity {
  category: string;
  createdAt: Date;
  constructor({ category }: categoryType) {
( this.category = category),
(this.createdAt = new Date())
  }
}
