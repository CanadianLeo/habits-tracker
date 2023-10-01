import { HttpException, Injectable } from '@nestjs/common';
import prisma from 'src/utils/prisma';
import { CustomLogger } from 'src/utils/logger';
import { HabitDto } from './dto/habit.dto';
import { habitComparator } from 'src/utils/habit-comparator';

@Injectable()
export class HabitService {
  private readonly logger = new CustomLogger(HabitService.name);
  
  async getHabits(): Promise<Array<HabitDto>> {
    try {
      let habits: Array<HabitDto> = await prisma.habit.findMany();
      habits = habits.sort(habitComparator);
      return habits;
    } catch (e) {
      this.logger.error(e);
      throw new HttpException("Habits are not found", 404, {cause: e});
    }
  }

  async getHabit(id: string): Promise<HabitDto> {
    try {
      const habit = await prisma.habit.findFirstOrThrow({
        where: {
          id,
        },
      });
      return habit;
    } catch (e) {
      this.logger.error(e);
      throw new HttpException("Habit is not found", 404, {cause: e});
    }
  }

  async createHabit(habit: HabitDto): Promise<HabitDto> {
    try {
      const newHabit = await prisma.habit.create({
        data: habit,
      });
      return newHabit;
    } catch (e) {
      this.logger.error(e);
      throw new HttpException("Habit was not created", 404, {cause: e});
    }
  }

  async updateHabit(id: string, habit: HabitDto): Promise<HabitDto> {
    try {
      const updatedHabit = await prisma.habit.update({
        data: habit,
        where: {
          id,
        },
      });
      return updatedHabit;
    } catch (e) {
      this.logger.error(e);
      throw new HttpException("Habit was not updated", 404, {cause: e});
    }
  }

  async deleteHabit(id: string): Promise<boolean> {
    try {
      await prisma.habit.delete({
        where: {
          id,
        },
      });
      return true;
    } catch (e) {
      this.logger.error(e);
      throw new HttpException("Habit was not deleted", 404, {cause: e});
    }
  }

  async incrementHabit(id: string): Promise<boolean> {
    try {
      const habit = await this.getHabit(id);
      if (habit.currentValue < habit.targetValue) {
        const newHabit = { ...habit, currentValue: habit.currentValue + 1 };
        await prisma.habit.update({
          data: newHabit,
          where: {
            id,
          },
        });
      }
      return true;
    } catch (e) {
      this.logger.error(e);
      throw new HttpException("Habit was not update", 404, {cause: e});
    }
  }

  async decrementHabit(id: string): Promise<boolean> {
    try {
      const habit = await this.getHabit(id);
      if (habit.currentValue > 0) {
        const newHabit = { ...habit, currentValue: habit.currentValue - 1 };
        await prisma.habit.update({
          data: newHabit,
          where: {
            id,
          },
        });
      }
      return true;
    } catch (e) {
      this.logger.error(e);
      throw new HttpException("Habit was not update", 404, {cause: e});
    }
  }

  async resetHabit(id: string): Promise<boolean> {
    try {
      const habit = await this.getHabit(id);
      if (habit.currentValue > 0) {
        const newHabit = { ...habit, currentValue: 0 };
        await prisma.habit.update({
          data: newHabit,
          where: {
            id,
          },
        });
      }
      return true;
    } catch (e) {
      this.logger.error(e);
      throw new HttpException("Habit was not update", 404, {cause: e});
    }
  }
}
