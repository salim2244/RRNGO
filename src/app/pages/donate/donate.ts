import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-donate',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './donate.html',
  styleUrl: './donate.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Donate {
  readonly demoDonationCode = signal('DEMO-ABCD');

  changeDemoDonationCode(): void {
    const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    const previousCode = this.demoDonationCode();
    let nextCode = this.createDemoDonationCode(characters);

    while (nextCode === previousCode) {
      nextCode = this.createDemoDonationCode(characters);
    }

    this.demoDonationCode.set(nextCode);
  }

  private createDemoDonationCode(characters: string): string {
    return `DEMO-${Array.from(
      { length: 8 },
      () => characters[Math.floor(Math.random() * characters.length)],
    ).join('')}`;
  }
}
