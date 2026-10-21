import { NgOptimizedImage } from '@angular/common';
import {
  afterNextRender,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Component,
  NgZone,
  OnDestroy,
  signal,
} from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [NgOptimizedImage, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements OnDestroy {
  readonly menuOpen = signal(false);
  readonly donationDetailsOpen = signal(false);
  private popupTimer?: ReturnType<typeof setTimeout>;

  constructor(
    private readonly ngZone: NgZone,
    private readonly changeDetector: ChangeDetectorRef,
  ) {
    afterNextRender(() => {
      this.popupTimer = setTimeout(
        () =>
          this.ngZone.run(() => {
            this.openDonationDetails();
            this.changeDetector.detectChanges();
          }),
        10_000,
      );
    });
  }

  ngOnDestroy(): void {
    if (this.popupTimer !== undefined) {
      clearTimeout(this.popupTimer);
    }
  }

  toggleNavigation(): void {
    this.menuOpen.update((isOpen) => !isOpen);
  }

  closeNavigation(): void {
    this.menuOpen.set(false);
  }

  openDonationDetails(): void {
    this.donationDetailsOpen.set(true);
  }

  closeDonationDetails(): void {
    this.donationDetailsOpen.set(false);
  }
}
