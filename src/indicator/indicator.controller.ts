import { Controller, Post, Body, Patch, Param, Get } from '@nestjs/common';
import { IndicatorService } from './indicator.service';
import { CreateIndicatorDto } from './dto/create-indicator.dto';
import { UpdateIndicatorDto } from './dto/update-indicator.dto';

@Controller('indicator')
export class IndicatorController {
  constructor(private readonly indicatorService: IndicatorService) {}

  @Get()
  findAll() {
    return this.indicatorService.findAll();
  }

  @Post()
  create(@Body() createIndicatorDto: CreateIndicatorDto) {
    return this.indicatorService.create(createIndicatorDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIndicatorDto: UpdateIndicatorDto,
  ) {
    return this.indicatorService.update(+id, updateIndicatorDto);
  }
}
