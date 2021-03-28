import { Component } from '@angular/core';
import { binArray } from '@beenotung/tslib/array';

type Day = {
  day: number
  currentMonth: boolean
  selected?: boolean
  disabled?: boolean
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'booking-ng';
  weekDays = `SMTWTFS`.split('');
  days: Day[] = [];

  constructor() {
    this.days.push({ day: 28, currentMonth: false });
    for (let i = 1; i <= 31; i++) {
      this.days.push({
        day: i,
        currentMonth: true,
        disabled: i >= 15 && i <= 19,
      });
    }
    for (let i = 1; i <= 10; i++) {
      this.days.push({ day: i, currentMonth: false });
    }
  }

  getDayWeeks(): Day[][] {
    return binArray(this.days, 7);
  }

  selectDay(day: Day): void {
    if (day.disabled) {
      return;
    }
    day.selected = true;
  }
}
