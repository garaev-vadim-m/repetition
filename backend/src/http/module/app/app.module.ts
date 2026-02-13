import { Module } from '@nestjs/common';
import { AppController } from '../../controller/app/app.controller';
import { AppService } from '../../service/app/app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from '../users/users/users.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
