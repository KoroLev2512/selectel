import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface MenuItem {
  id: number;
  name: string;
  value: number;
  selected: boolean;
}

@Component({
  standalone: true,
  selector: 'app-menu',
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <h1>
      {{ selectedNames.join(', ') || 'Выберите один или несколько элементов' }} |
      Выбрано пунтов: {{ selectedCount }} |
      Значение: {{ totalValue }} ₽
    </h1>

    <ul>
      <li *ngFor="let item of menu">
        <label>
          <input
            type="checkbox"
            [(ngModel)]="item.selected"
            (change)="recalculate()"
          />
          {{ item.name }} — {{ item.value }} ₽
        </label>
      </li>
    </ul>

    <a routerLink="/">← Назад</a>
  `,
})
export class MenuComponent {
  menu: MenuItem[] = [
    { id: 1, name: 'Item 1', value: 20, selected: false },
    { id: 2, name: 'Item 2', value: 30, selected: false },
    { id: 3, name: 'Item 3', value: 40, selected: false },
    { id: 4, name: 'Item 4', value: 50, selected: false },
  ];

  selectedNames: string[] = [];
  selectedCount = 0;
  totalValue = 0;

  recalculate() {
    const selected = this.menu.filter(i => i.selected);
    this.selectedNames = selected.map(i => i.name);
    this.selectedCount = selected.length;
    this.totalValue = selected.reduce((sum, i) => sum + i.value, 0);
  }
}
