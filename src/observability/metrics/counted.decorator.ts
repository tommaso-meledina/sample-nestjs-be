import { Counter } from 'prom-client';

export function Counted(metricName: string): MethodDecorator {
  return function (target, propertyKey, descriptor: PropertyDescriptor) {
    const original = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const counter: Counter<string> = this.metrics?.[metricName];
      if (counter) {
        counter.inc(); // Increment the counter
      }
      return original.apply(this, args);
    };

    return descriptor;
  };
}
