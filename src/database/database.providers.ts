import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb+srv://ivanbilotserkivskiy:NinWAYG6wSu2p2aK@cluster0.oslcqu1.mongodb.net/?retryWrites=true&w=majority',
      ),
  },
];
