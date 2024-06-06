// src/app.module.ts
import { Module } from '@nestjs/common';
import { DiceModule } from './dice/dice.module';

@Module({
  imports: [DiceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

