import { Controller, Get, Post, Put, Delete, Body, Param, Query, HttpException, HttpStatus } from '@nestjs/common';
import { DummyService } from './dummy.service';
import { Dummy } from 'src/model/dummy.entity';

@Controller('dummies')
export class DummyController {
  constructor(private readonly DummyService: DummyService) {}

  @Get()
  findAll() {
    return this.DummyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.DummyService.findOne(id);
  }

  @Post()
  create(@Body() Dummy: Dummy) {
    return this.DummyService.create(Dummy);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() Dummy: Partial<Dummy>) {
    return this.DummyService.update(id, Dummy);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.DummyService.delete(id);
  }
}
