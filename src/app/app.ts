import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Header } from './component/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Header],
  template: `
    <app-header/>
    <main>
      <app-home/>
    </main>
  `,
  styles: [
    `
      main {
        padding: 2vw;
      }
    `
  ],
})
export class App {
  protected readonly title = signal('movie-store');
}
