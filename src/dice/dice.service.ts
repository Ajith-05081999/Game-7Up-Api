// src/dice/dice.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class DiceService {
  rollDice(betAmount: number, betOption: string, points: number) {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const sum = dice1 + dice2;

    let pointsChange = -betAmount;
    if (sum < 7 && betOption === '7 Down') {
      pointsChange = betAmount * 2;
    } else if (sum > 7 && betOption === '7 Up') {
      pointsChange = betAmount * 2;
    } else if (sum === 7 && betOption === 'Lucky 7') {
      pointsChange = betAmount * 5;
    }

    return {
      dice: [dice1, dice2],
      pointsChange,
      newPoints: points + pointsChange,
    };
  }
}
