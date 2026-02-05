import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconConfigService } from './core/services/icon-config';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class App implements AfterViewInit {
	protected animationToggle = false;
	protected hideGreetingPanelTimeout = 500;
	
    readonly #iconConfigService: IconConfigService = inject(IconConfigService);

	@ViewChild('greetingText') loadingPanelRef!: ElementRef;

	constructor() {
      this.#iconConfigService.initIcons();
	}

	ngAfterViewInit(): void {
		if (this.animationToggle) {
			this.setHelloTextAnimation();
		} 
	}

	private setHelloTextAnimation() {
		if (this.loadingPanelRef) {
			const loadingPanemHtml = this.loadingPanelRef.nativeElement as HTMLElement;
		}
	}


	private hideGreetingPanel() {
		// if (this.greetingPanelRef) {
		// 	const greetingPanelHtml = (this.greetingPanelRef.nativeElement as HTMLElement);
		// 	const greetingTextHtml = (this.greetingTextRef.nativeElement as HTMLElement);

		// 	greetingTextHtml.classList.add("fade-out-to-top");
		// 	setTimeout(() => greetingPanelHtml.classList.add("fade-out"), 200);
		// }
	}
}
