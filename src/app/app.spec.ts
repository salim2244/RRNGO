import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should render the navigation and load every page route', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('nav a')).toHaveLength(5);

    for (const [path, title] of [
      ['home', 'Change grows'],
      ['about', 'Progress belongs'],
      ['services', 'Care that starts'],
      ['gallery', 'A shared effort'],
      ['contact', 'Good things begin'],
      ['donate', 'Every act of support'],
    ]) {
      await router.navigateByUrl(`/${path}`);
      fixture.detectChanges();
      await fixture.whenStable();
      expect(compiled.querySelector('main h1')?.textContent).toContain(title);
    }
  }, 15000);
});
