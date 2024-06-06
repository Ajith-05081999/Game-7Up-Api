// src/dice/dice.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { DiceService } from './dice.service';

@Controller('game')
export class DiceController {
  constructor(private readonly diceService: DiceService) {}

  @Post('roll')
  rollDice(@Body() body: { betAmount: number; betOption: string; points: number }) {
    return this.diceService.rollDice(body.betAmount, body.betOption, body.points);
  }
}

