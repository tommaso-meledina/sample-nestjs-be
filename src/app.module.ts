import { APP_INTERCEPTOR } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { DummyModule } from './dummies/dummy.module';
import { HealthModule } from './health/health.module';
import { MetricsModule } from './metrics/metrics.module';
import { SnakeCaseNamingStrategy } from './model/snake-case-naming-strategy';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        console.log(`DB_SHOULD_SYNC is ${process.env.DB_SHOULD_SYNC}; aka ${config.get<boolean>('DB_SHOULD_SYNC')}`)
        return {
        type: config.get<'postgres' | 'mysql' | 'sqlite'>('DB_TYPE'),
        host: config.get<string>('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        username: config.get<string>('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_DATABASE'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: config.get<string>('DB_SHOULD_SYNC') === 'true',
        namingStrategy : new SnakeCaseNamingStrategy()
      };
      }
    }),
    PrometheusModule.register(),
    DummyModule,
    HealthModule,
    MetricsModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    }
    ]
})
export class AppModule {}
