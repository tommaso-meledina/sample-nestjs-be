import { Module } from '@nestjs/common';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { MetricsService, DummyInvocationsCounterProvider } from './metrics.service';

@Module({
  imports: [PrometheusModule],
  providers: [MetricsService, DummyInvocationsCounterProvider],
  exports: [MetricsService],
})
export class MetricsModule {}
