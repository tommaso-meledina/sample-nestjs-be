import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dummy } from 'src/model/dummy.entity';
import { MetricsService } from 'src/metrics/metrics.service';

@Injectable()
export class DummyService {
  constructor(
    @InjectRepository(Dummy)
    private readonly dummyRepository: Repository<Dummy>,
    private readonly metricsService: MetricsService
  ) {}

  findAll() {
    this.metricsService.incrementDummyInvocationsCounter();
    return this.dummyRepository.find();
  }

  findOne(id: number) {
    return this.dummyRepository.findOneBy({ id });
  }

  create(dummy: Dummy) {
    return this.dummyRepository.save(dummy);
  }

  async update(id: number, dummy: Partial<Dummy>) {
    await this.dummyRepository.update(id, dummy);
    return this.dummyRepository.findOneBy({ id });
  }

  delete(id: number) {
    return this.dummyRepository.delete(id);
  }
}
