import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Advice } from './advice';
import { AdviceService } from './advice.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  adviceService: AdviceService = inject(AdviceService);
  advice: Advice | undefined;

  constructor() {}

  getNewAdvice() {
    this.adviceService.getRandomAdvice().then((advice: Advice) => {
      this.advice = advice;
    });
  }
}
