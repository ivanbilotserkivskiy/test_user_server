import { Connection } from 'mongoose';
import { TestSchema } from './schemas/test.schema';

export const testProviders = [
  {
    provide: 'TEST_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Test', TestSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
