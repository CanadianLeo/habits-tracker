import { Injectable } from '@nestjs/common';
import { HabitDto } from './dto/habit.dto';
import prisma from 'src/utils/prisma';

@Injectable()
export class HabitService {
  async getHabits(): Promise<Array<HabitDto>> {
    try {
      const habits = await prisma.habit.findMany();
      return habits;
    } catch (e) {
      console.log(e);
    }
  }

  async getHabit(id: string): Promise<HabitDto> {
    try {
      const habit = await prisma.habit.findFirstOrThrow(
        {
          where: {
            id
          }
        }
      );
      return habit;
    } catch (e) {
      console.log(e);
    }
  }

  async createHabit(habit: HabitDto): Promise<HabitDto> {
    try {
      const newHabit = await prisma.habit.create(
        {
          data: habit
        }
      );
      return newHabit;
    } catch (e) {
      console.log(e);
    }
  }

  async updateHabit(id: string, habit: HabitDto): Promise<HabitDto> {
    try {
      const updatedHabit = await prisma.habit.update(
        {
          data: habit, 
          where: {
            id
          }
        });
      return updatedHabit;
    } catch (e) {
      console.log(e);
    }
  }

  async deleteHabit(id: string): Promise<boolean> {
    try {
      await prisma.habit.delete(
        {
          where: {
            id
          }
        }
      );
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async incrementHabit(id: string): Promise<boolean> {
    try {
      const habit = await this.getHabit(id);
      if (habit.currentValue < habit.targetValue) {
        const newHabit = {...habit, currentValue: habit.currentValue + 1};
        await prisma.habit.update(
          {
            data: newHabit, 
            where: {
              id
            }
        });
      }
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
