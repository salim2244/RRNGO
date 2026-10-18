import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Home } from './home';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a replaceable founder message and clearly labeled demo photos', () => {
    fixture.detectChanges();

    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('.founder-message')?.textContent).toContain('[Founder name]');
    expect(page.querySelector('.founder-note')?.textContent).toContain('Sample message');
    expect(page.querySelectorAll('.work-photo-grid figure')).toHaveLength(3);
    expect(page.querySelectorAll('.work-photo-grid figcaption small')).toHaveLength(3);
    expect(page.querySelector('.work-photo-note')?.textContent).toContain('Illustrative stock photos');
  });
});
