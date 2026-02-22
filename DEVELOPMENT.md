# Руководство по разработке

Инструкции и best practices для проекта на Angular.

## TypeScript

- Использовать strict type checking
- Использовать вывод типов, когда тип очевиден
- Избегать `any`; использовать `unknown`, если тип неизвестен

## Angular

### Компоненты

- **Standalone components** — только standalone, NgModules не использовать
- **Не указывать** `standalone: true` (дефолт в Angular v20+)
- **Signals** для управления состоянием
- **Lazy loading** для feature routes
- **Host bindings** — не использовать `@HostBinding` и `@HostListener`; указывать в объекте `host` в `@Component` / `@Directive`
- **Изображения** — `NgOptimizedImage` для статичных картинок (не для inline base64)

### Компоненты — детали

- Один компонент — одна ответственность, держать компоненты небольшими
- `input()` и `output()` вместо декораторов `@Input` / `@Output`
- `computed()` для производного состояния
- `changeDetection: ChangeDetectionStrategy.OnPush`
- Inline-шаблоны для маленьких компонентов, внешние файлы — для больших
- Reactive forms вместо Template-driven forms
- **Не использовать** `ngClass` — использовать привязки `[class.x]`
- **Не использовать** `ngStyle` — использовать привязки `[style.x]`
- Пути к шаблонам/стилям — относительно TS-файла компонента

## State Management

- Signals для локального состояния компонента
- `computed()` для производного состояния
- Трансформации — чистые и предсказуемые
- **Не использовать** `mutate` у signals; использовать `update` или `set`

## Шаблоны

- Шаблоны должны быть простыми, без сложной логики
- Нативный control flow: `@if`, `@for`, `@switch` вместо `*ngIf`, `*ngFor`, `*ngSwitch`
- Async pipe для observables
- Не полагаться на глобальные объекты (например, `new Date()`)
- Не использовать arrow functions в шаблонах

## Сервисы

- Одна ответственность на сервис
- `providedIn: 'root'` для синглтонов
- Использовать `inject()` вместо constructor injection

## Доступность (Accessibility)

- Пройти все проверки AXE
- Соблюдать WCAG AA: управление фокусом, контраст, ARIA-атрибуты
