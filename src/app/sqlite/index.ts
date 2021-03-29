import * as path from 'path';
import { Sequelize, SyncOptions, QueryOptions } from 'sequelize';

import EntityModel from './entity.model';
import FieldsModel from './field.model';

const sequelize = new Sequelize('database', '', '1234', {
  dialect: 'sqlite',
  dialectModulePath: '@journeyapps/sqlcipher',
  storage: path.resolve(process.cwd(), 'database.sqlite')
});
sequelize.query(`PRAGMA cipher_compatibility=4`).then();
sequelize.query(`PRAGMA key='1234'`).then();

[
  EntityModel, FieldsModel
].forEach(model => model.initialize(sequelize));

const synchronize = (options: SyncOptions = {}): Promise<any> => {
  return sequelize.sync(options);
};

const authenticate = (options: QueryOptions = {}): Promise<void > => {
  return sequelize.authenticate(options);
}

export {
  sequelize as Database,
  synchronize, authenticate,
  EntityModel, FieldsModel
}
