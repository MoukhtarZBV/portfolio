import { Component, ElementRef, inject, input, OnInit } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { CustomButtonDirective } from "@shared/directives/button.directive";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss',
    imports: [
        MatIconModule,
        CustomButtonDirective
    ]
})
export class CardComponent implements OnInit {
    private elementRef: ElementRef = inject(ElementRef);

    readonly gradientColor = input<string>('transparent');

    ngOnInit() {
        this.elementRef.nativeElement.style.setProperty('--gradient-color', this.gradientColor());
    }
}