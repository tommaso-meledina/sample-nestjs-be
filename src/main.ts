import './observability/tracing/tracing';
import { NestFactory } from '@nestjs/core';
import { LogLevel } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
    {
      logger: determineLogLevels(process.env.LOG_LEVEL)
    }
  );
  app.setGlobalPrefix('sample-backend')

  const config = new DocumentBuilder()
    .setTitle('Sample NestJS BE application')
    .setDescription('NextJS application for demonstrating TS-based backends')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(process.env.PORT ?? 3000);
}

function determineLogLevels(logLevelValue? : string): LogLevel[] {
  const sortedAcceptedLogLevels : LogLevel[] = ['verbose', 'debug', 'log', 'warn', 'error', 'fatal'];
  if(!logLevelValue || !(sortedAcceptedLogLevels.includes(logLevelValue as LogLevel))) {
    console.log('Invalid or missing value for LOG_LEVEL env variable, falling back to warn+');
    return ['warn', 'error', 'fatal'];
  }
  else {
    console.log(`Setting log level to ${logLevelValue}+`)
    return sortedAcceptedLogLevels.filter(
      (level) => sortedAcceptedLogLevels.indexOf(level) >= sortedAcceptedLogLevels.indexOf(logLevelValue as LogLevel)
    )
  }
}

bootstrap();
