// src/metrics/metrics.service.ts
import { Injectable } from '@nestjs/common';
import { Counter } from 'prom-client';
import { InjectMetric, makeCounterProvider } from '@willsoto/nestjs-prometheus';

@Injectable()
export class MetricsService {
  constructor(
     @InjectMetric('get_dummy_invocations_total')
    private readonly dummyInvocationsCounter: Counter<string>,
  ) {}

  incrementDummyInvocationsCounter() {
    this.dummyInvocationsCounter.inc();
  }
}

// Export the provider for the counter
export const DummyInvocationsCounterProvider = makeCounterProvider({
  name: 'get_dummy_invocations_total',
  help: 'Number of times the GET /dummies operation was called',
});
