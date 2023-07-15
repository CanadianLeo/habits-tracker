import { ApiOkResponse } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { HabitService } from './habit.service';
import { HabitDto } from './dto/habit.dto';

@Controller('habits')
export class HabitController {
  constructor(private readonly habitService: HabitService) {}

  @ApiOkResponse({
    description: 'All habits',
    type: HabitDto,
    isArray: true,
  })
  @Get()
  async getHabits(): Promise<Array<HabitDto>> {
    return await this.habitService.getHabits();
  }

  @ApiOkResponse({
    description: 'Id of created habit',
    type: String,
  })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createHabit(@Body() habit: HabitDto) {
    return (await this.habitService.createHabit(habit)).id;
  }

  @ApiOkResponse({
    description: 'Get habit by id',
    type: HabitDto,
  })
  @Get(':id')
  async getHabitById(@Param('id') id: string): Promise<HabitDto> {
    return await this.habitService.getHabit(id);
  }

  @ApiOkResponse({
    description: 'Update habit',
    type: HabitDto,
  })
  @Put(':id')
  async updateHabit(@Param('id') id: string, @Body() updateHabit: HabitDto) {
    return await this.habitService.updateHabit(id, updateHabit);
  }

  @ApiOkResponse({
    description: 'Delete habit by id',
    type: Boolean,
  })
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async removeHabit(@Param('id') id: string) {
    const result = await this.habitService.deleteHabit(id);
    return result;
  }

  @ApiOkResponse({
    description: 'Increment habit counter',
    type: Boolean,
  })
  @Put('increment/:id')
  async incrementHabit(@Param('id') id: string) {
    const result = await this.habitService.incrementHabit(id);
    return result;
  }

  @ApiOkResponse({
    description: 'Decrement habit counter',
    type: Boolean,
  })
  @Put('decrement/:id')
  async decrementHabit(@Param('id') id: string) {
    const result = await this.habitService.decrementHabit(id);
    return result;
  }

  @ApiOkResponse({
    description: 'Reset habit counter',
    type: Boolean,
  })
  @Put('reset/:id')
  async resetHabit(@Param('id') id: string) {
    const result = await this.habitService.resetHabit(id);
    return result;
  }
}
