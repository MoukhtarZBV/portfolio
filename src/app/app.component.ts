import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconConfigService } from './core/services/icon-config';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class App {
    readonly #iconConfigService: IconConfigService = inject(IconConfigService);

	constructor() {
      this.#iconConfigService.initIcons();
	}
}
