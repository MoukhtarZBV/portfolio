import { AfterViewInit, Component, ElementRef, inject, OnInit, Renderer2, ViewChild } from "@angular/core";
import { GridComponent } from "./grid/grid.component";
import { MatIconModule } from "@angular/material/icon";

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.scss',
    standalone: true,
    imports: [
        GridComponent,
        MatIconModule
    ]
})
export class HeroComponent implements AfterViewInit {
    private readonly renderer = inject(Renderer2);

    @ViewChild('myJob') myJobTextRef!: ElementRef;
    private jobTextDelay: number = 900;
    private jobTextDelayStep: number = 30;


    ngAfterViewInit(): void {
        this.setJobTextAnimation();
    }

    private setJobTextAnimation() {
        if (this.myJobTextRef) {
            const myJobTextHtml = (this.myJobTextRef.nativeElement as HTMLElement);
            const myJobText = myJobTextHtml.innerText;
            myJobTextHtml.style.minWidth = `${myJobTextHtml.getBoundingClientRect().width + 5}px`;
            myJobTextHtml.innerText = '';

            for (const letter of myJobText) {
                setTimeout(() => {
                    const newLetterSpan = this.renderer.createElement('span');
                    const newLetter = this.renderer.createText(letter);
                    if (letter === ' ')
                        this.renderer.addClass(newLetterSpan, 'inline');
                    this.renderer.addClass(newLetterSpan, 'fade-from-bottom');
                    this.renderer.appendChild(newLetterSpan, newLetter);
                    this.renderer.appendChild(myJobTextHtml, newLetterSpan);
                }, this.jobTextDelay);
                this.jobTextDelay += this.jobTextDelayStep;
            }
        }
    }
}