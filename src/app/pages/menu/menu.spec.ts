import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Menu } from './menu';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

describe('Menu', () => {
  let component: Menu;
  let fixture: ComponentFixture<Menu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menu],
      providers: [provideNoopAnimations()]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Menu);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate totalValue correctly', () => {
    // Menu type 1 has item 3 checked (value 40) initially
    expect(component.totalValue()).toBe(40);
  });
});
