import * as path from 'path';
import { Sequelize, Model, DataTypes } from 'sequelize';

class FieldModel extends Model {
  public id!: number;
  public name!: string;
  public createdAt!: Date;
  public updatedAt!: Date;

  public static initialize(sequelize: Sequelize) {
    this.init({
      name: DataTypes.STRING
    }, {
      sequelize,
      tableName: 'fields'
    });
  }

}

export default FieldModel;
