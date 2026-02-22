import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

interface MenuItem {
  id: number;
  name: string;
  value: number;
  selected: boolean;
}

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  menu = signal<MenuItem[]>([
    { id: 1, name: 'Item 1', value: 20, selected: false },
    { id: 2, name: 'Item 2', value: 30, selected: false },
    { id: 3, name: 'Item 3', value: 40, selected: false },
    { id: 4, name: 'Item 4', value: 50, selected: false },
  ]);

  selectedNames = signal<string[]>([]);
  selectedCount = signal(0);
  totalValue = signal(0);

  toggleItem(item: MenuItem) {
    this.menu.update(items =>
      items.map(i =>
        i.id === item.id ? { ...i, selected: !i.selected } : i
      )
    );
    this.recalculate();
  }

  private recalculate() {
    const selected = this.menu().filter(i => i.selected);
    this.selectedNames.set(selected.map(i => i.name));
    this.selectedCount.set(selected.length);
    this.totalValue.set(selected.reduce((sum, i) => sum + i.value, 0));
  }
}
