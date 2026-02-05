import { Component } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { AnimatedCardComponent } from "@shared/components/animated-card/animated-card.component";
import { SeparatorComponent } from "@shared/components/separator/separator.component";
import { TitleComponent } from "@shared/components/title/title.component";

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.scss',
    standalone: true,
    imports: [
        MatIconModule,
        TitleComponent,
        SeparatorComponent,
        AnimatedCardComponent,
        MatIconModule
    ]
})
export class HeroComponent {}