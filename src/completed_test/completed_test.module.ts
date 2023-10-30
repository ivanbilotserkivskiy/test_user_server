import { Module } from '@nestjs/common';
import { CompletedTestController } from './completed_test.controller';
import { CompletedTestService } from './completed_test.service';
import { DatabaseModule } from 'src/database/database.module';
import { completedTestProviders } from './completed_test.providers';
import { UserModule } from 'src/user/user.module';
import { TestModule } from 'src/test/test.module';

@Module({
  imports: [DatabaseModule, UserModule, TestModule],
  controllers: [CompletedTestController],
  providers: [CompletedTestService, ...completedTestProviders],
  exports: [CompletedTestService],
})
export class CompletedTestModule {}
