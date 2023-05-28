import { Injectable } from '@nestjs/common';
import { HabitDto } from './dto/habit.dto';

@Injectable()
export class HabitService {
  getHabits(): Array<HabitDto> {
    return [
      {
        id: '0',
        name: 'Learn NestJs',
        description: 'Use NestJs and code ur first project',
        icon: 'N',
        currentValue: 0,
        targetValue: 100,
        color: 'color1',
        period: '',
      },
    ];
  }
}
