import { Component } from "@angular/core";
import { CardComponent } from "@shared/components/card/card.component";

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss',
    imports: [CardComponent], 
})
export class SkillsComponent {}