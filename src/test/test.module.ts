import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { DatabaseModule } from 'src/database/database.module';
import { testProviders } from './test.providers';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [DatabaseModule, UserModule],
  providers: [TestService, ...testProviders],
  controllers: [TestController],
})
export class TestModule {}
