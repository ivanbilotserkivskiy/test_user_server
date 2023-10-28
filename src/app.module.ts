import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import * as path from 'path';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TestModule } from './test/test.module';
import { CompletedTestModule } from './completed_test/completed_test.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: path.resolve(__dirname, '.', '.env'),
      isGlobal: true,
    }),
    UserModule,
    AuthModule,
    TestModule,
    CompletedTestModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
