import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { HabitService } from './habit.service';
import { HabitDto } from './dto/habit.dto';

@Controller('habits')
export class HabitController {
  constructor(private readonly habitService: HabitService) {}

  @Get()
  getHabits(): Array<HabitDto> {
    return this.habitService.getHabits();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createHabit(@Body() habit: HabitDto)  {
    return 'New Habit';
  }

  @Get(':id')
  getHabitById(@Param('id') id: string): HabitDto {
    return new HabitDto();
  }

  @Put(':id')
  updateHabit(
    @Param('id') id: string,
    @Body() updateHabit: HabitDto
  ) {
    return `Update Habit ${id}`;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeHabit(@Param('id') id: string) {
    return `Delete Habit ${id}`;
  }
}
