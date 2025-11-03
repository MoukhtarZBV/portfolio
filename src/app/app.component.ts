import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class App implements AfterViewInit {

	readonly greetingTranslations = [ "Hola", "你好", "Hallo", "こんにちは", "مرحبًا", "Bonjour", "Привет", "Hello" ];
	protected animationToggle = false;
	protected hideGreetingPanelTimeout = 500;

	@ViewChild('greetingText') greetingTextRef!: ElementRef;
	@ViewChild('greetingPanel') greetingPanelRef!: ElementRef;

	ngAfterViewInit(): void {
		if (this.animationToggle) {
			this.setHelloTextAnimation();
		} else {
			this.hideGreetingPanel();
		}
	}

	private setHelloTextAnimation() {
		if (this.greetingTextRef) {
			const greetingTextHtml = this.greetingTextRef.nativeElement as HTMLElement;
	
			const laps = 1;
			const totalDuration = 2500;
			const iterations = this.greetingTranslations.length * laps;
			const slowDownRate = 1.05;

			const sumOfGeom = (Math.pow(slowDownRate, iterations) - 1) / (slowDownRate - 1);
			const currentDuration = totalDuration / sumOfGeom;

			let accumulatedTime = 0;
			for (let i = 0; i < iterations; i++) {
				const interval = currentDuration * Math.pow(slowDownRate, i);
				accumulatedTime += interval;

				setTimeout(() => {
					greetingTextHtml.innerHTML = this.greetingTranslations[i % this.greetingTranslations.length];
					if (i === iterations - 1) {
						setTimeout(() => this.hideGreetingPanel(), this.hideGreetingPanelTimeout);
					}
				}, accumulatedTime);
			}
		}
	}


	private hideGreetingPanel() {
		if (this.greetingPanelRef) {
			const greetingPanelHtml = (this.greetingPanelRef.nativeElement as HTMLElement);
			const greetingTextHtml = (this.greetingTextRef.nativeElement as HTMLElement);

			greetingTextHtml.classList.add("fade-out-to-top");
			setTimeout(() => greetingPanelHtml.classList.add("fade-out"), 200);
		}
	}
}
