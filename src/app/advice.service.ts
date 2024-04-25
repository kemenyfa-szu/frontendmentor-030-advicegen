import { Injectable } from '@angular/core';
import { Advice } from './advice';
@Injectable({
  providedIn: 'root',
})
export class AdviceService {
  protected advice: Advice | undefined;

  url = 'https://api.adviceslip.com/advice';

  constructor() {}

  async getRandomAdvice(): Promise<Advice> {
    const data = await fetch(this.url);
    return (await data.json()) ?? {};
  }
}
