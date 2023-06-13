import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { HabitService } from './habit.service';
import { HabitDto } from './dto/habit.dto';

@Controller('habits')
export class HabitController {
  constructor(private readonly habitService: HabitService) {}

  @Get()
  async getHabits(): Promise<Array<HabitDto>> {
    return await this.habitService.getHabits();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createHabit(@Body() habit: HabitDto)  {
    return await this.habitService.createHabit(habit);
  }

  @Get(':id')
  async getHabitById(@Param('id') id: string): Promise<HabitDto> {
    return await this.habitService.getHabit(id);
  }

  @Put(':id')
  async updateHabit(
    @Param('id') id: string,
    @Body() updateHabit: HabitDto
  ) {
    return await this.habitService.updateHabit(id, updateHabit);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async removeHabit(@Param('id') id: string) {
    const result = await this.habitService.deleteHabit(id);
    return result;
  }

  @Put('increment/:id')
  async incrementHabit(@Param('id') id: string) {
    const result = await this.habitService.incrementHabit(id);
    return result;
  }
}
