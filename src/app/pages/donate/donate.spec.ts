import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Donate } from './donate';

describe('Donate', () => {
  let component: Donate;
  let fixture: ComponentFixture<Donate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Donate],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Donate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show online donations as coming soon without collecting payment details', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(page.textContent).toContain('Online donations are coming soon.');
    expect(page.textContent).toContain('Coming soon');
    expect(page.querySelector('input, form')).toBeNull();
  });
});
