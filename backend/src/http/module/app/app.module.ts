import { Module } from '@nestjs/common';
import { AppController } from '../../controller/app/app.controller';
import { AppService } from '../../service/app/app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from '../users/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest_db',
      synchronize: false,
      autoLoadEntities: false,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
