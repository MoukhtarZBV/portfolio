import { Component } from '@angular/core';
import { HeroComponent } from '../features/hero/hero.component';
import { AboutComponent } from '../features/about/about.component';
import { ExperienceComponent } from '../features/experience/experience.component';
import { ProjectsComponent } from '../features/projects/projects.component';
import { SkillsComponent } from '../features/skills/skills.component';
import { ContactComponent } from '../features/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
