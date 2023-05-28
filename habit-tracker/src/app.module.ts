import { Module } from '@nestjs/common';
import { HabitController } from './habit/habit.controller';
import { HabitService } from './habit/habit.service';

@Module({
  imports: [],
  controllers: [HabitController],
  providers: [HabitService],
})
export class AppModule {}
