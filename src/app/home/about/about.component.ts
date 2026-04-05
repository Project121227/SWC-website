import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeUpDirective } from '../../shared/fade-up.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FadeUpDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  stats = [
    { label: 'Patients', target: 500, current: 0, suffix: '+' },
    { label: 'Years Experience', target: 2, current: 0, suffix: '+' },
    { label: 'Holistic Approach', target: 100, current: 0, suffix: '%' }
  ];

  startCounters() {
    this.stats.forEach(stat => {
      if (stat.current < stat.target) {
        const duration = 2000; // 2 seconds
        const frames = 60;
        const step = stat.target / frames;
        const interval = duration / frames;

        const timer = setInterval(() => {
          stat.current += step;
          if (stat.current >= stat.target) {
            stat.current = stat.target;
            clearInterval(timer);
          }
        }, interval);
      }
    });
  }
}
