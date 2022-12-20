import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './domain/user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { ApolloDriver } from '@nestjs/apollo';
import { EventModule } from './socket/event.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    TypeOrmModule.forRoot(configuration().database),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      debug: true,
      playground: true,
      driver: ApolloDriver,
    }),
    UserModule,
    // KafkaModule,
    EventModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
