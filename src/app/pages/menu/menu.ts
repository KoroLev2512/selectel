import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';

interface MenuItem {
  id: number;
  name: string;
  value: number;
  checked: boolean;
}

interface MenuSection {
  id: string;
  name: string;
  items: MenuItem[];
}

@Component({
  selector: 'app-menu',
  imports: [RouterLink, NzTypographyModule, NzMenuModule, NzCheckboxModule, NzButtonModule, FormsModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Menu {
  sections = signal<MenuSection[]>([
    {
      id: 'type1',
      name: 'Тип 1',
      items: [
        { id: 1, name: 'Item 1', value: 20, checked: false },
        { id: 2, name: 'Item 2', value: 30, checked: false },
        { id: 3, name: 'Item 3', value: 40, checked: true },
        { id: 4, name: 'Item 4', value: 50, checked: false }
      ]
    },
    {
      id: 'type2',
      name: 'Тип 2',
      items: [
        { id: 5, name: 'Item A', value: 15, checked: false },
        { id: 6, name: 'Item B', value: 35, checked: false },
        { id: 7, name: 'Item C', value: 50, checked: true }
      ]
    }
  ]);

  activeSectionId = signal<string>('type1');

  activeSection = computed(() => {
    return this.sections().find(s => s.id === this.activeSectionId()) || this.sections()[0];
  });

  activeItems = computed(() => this.activeSection().items);

  selectedCount = computed(() => {
    return this.activeItems().filter(item => item.checked).length;
  });

  totalValue = computed(() => {
    return this.activeItems()
      .filter(item => item.checked)
      .reduce((sum, item) => sum + item.value, 0);
  });

  selectSection(id: string) {
    this.activeSectionId.set(id);
  }

  toggleItem(id: number, checked: boolean) {
    this.sections.update(sections =>
      sections.map(sec =>
        sec.id === this.activeSectionId()
          ? {
            ...sec,
            items: sec.items.map(item => (item.id === id ? { ...item, checked } : item))
          }
          : sec
      )
    );
  }
}

