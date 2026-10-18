import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  readonly menuOpen = signal(false);

  toggleNavigation(): void {
    this.menuOpen.update((isOpen) => !isOpen);
  }

  closeNavigation(): void {
    this.menuOpen.set(false);
  }
}
