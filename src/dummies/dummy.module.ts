import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DummyService } from './dummy.service';
import { DummyController } from './dummy.controller';
import { Dummy } from 'src/model/dummy.entity';
import { MetricsModule } from 'src/metrics/metrics.module';

@Module({
  imports: [TypeOrmModule.forFeature([Dummy]), MetricsModule],
  providers: [DummyService],
  controllers: [DummyController]
})
export class DummyModule {}
