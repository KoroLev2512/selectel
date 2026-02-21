import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <h1>Привет, меня зовут Юра</h1>
    <p>А это моё тестовое мини-приложение</p>
    <a routerLink="/menu">Перейти к меню →</a>
  `,
})
export class HomeComponent {}
