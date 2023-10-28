import { Connection } from 'mongoose';
import { CompletedTestSchema } from './schemas/completed_test.schema';
export const completedTestProviders = [
  {
    provide: 'COMPLETED_TEST_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('CompletedTest', CompletedTestSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
