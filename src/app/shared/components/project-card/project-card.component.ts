import { Component, ElementRef, inject, input, OnInit } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

@Component({
    selector: 'app-project-card',
    templateUrl: './project-card.component.html',
    styleUrl: './project-card.component.scss',
    imports: [
        MatIconModule
    ]
})
export class ProjectCardComponent implements OnInit {
    private elementRef: ElementRef = inject(ElementRef);

    readonly project = input.required<Project>();

    readonly gradientColor = input<string>('transparent');

    ngOnInit() {
        this.elementRef.nativeElement.style.setProperty('--gradient-color', this.gradientColor());
    }
}