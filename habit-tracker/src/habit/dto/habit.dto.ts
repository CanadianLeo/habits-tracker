import { ApiProperty } from "@nestjs/swagger";

export class HabitDto {
  @ApiProperty()
  id: string;
  
  @ApiProperty()
  name: string;
  
  @ApiProperty()
  description: string;
  
  @ApiProperty()
  icon: string;
  
  @ApiProperty()
  currentValue: number;
  
  @ApiProperty()
  targetValue: number;
  
  @ApiProperty()
  color: string;
  
  @ApiProperty()
  period: string;
}
