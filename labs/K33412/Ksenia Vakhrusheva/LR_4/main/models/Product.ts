import { Table, ForeignKey, Column, Model, PrimaryKey, AutoIncrement, CreatedAt, UpdatedAt, DeletedAt, BelongsTo, HasMany } from 'sequelize-typescript';
import Sale from './Sale';
import Review from './reviews';

@Table({ tableName: 'Product' })
class Product extends Model<Product> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column
  productName!: string;

  @Column
  productDescription!: string;

  @Column
  price!: number;

  @Column
  imageUrl!: string;

  @Column
  quantity!: number;

  @Column
  categoryName!: string;


  @HasMany(() => Sale)
  sales!: Sale[];

  @HasMany(() => Review)
  reviews!: Review[];

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;

  @DeletedAt
  deletedAt!: Date;
}

export default Product;
