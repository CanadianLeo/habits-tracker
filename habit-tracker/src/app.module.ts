import { Module } from '@nestjs/common';
import { HabitModule } from './habit/habit.module';

@Module({
  imports: [HabitModule],
})
export class AppModule {}
