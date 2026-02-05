import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '@shared/components/project-card/project-card.component';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    ProjectCardComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'E-Sport Tournaments',
      location: 'Toulouse III University, 2023',
      subtitle: 'Making tournaments organisation easier',
      technologies: ['Angular', 'TypeScript', 'Node.js'],
      imageUrl: "images/projects/esport-tournaments/games.png",
    },
    {
      title: 'E-Sport Tournaments',
      location: 'Toulouse III University, 2023',
      subtitle: 'Making tournaments organisation easier',
      technologies: ['Angular', 'TypeScript', 'Node.js'],
      imageUrl: "images/projects/esport-tournaments/games.png",
    },
    {
      title: 'E-Sport Tournaments',
      location: 'Toulouse III University, 2023',
      subtitle: 'Making tournaments organisation easier',
      technologies: ['Angular', 'TypeScript', 'Node.js'],
      imageUrl: "images/projects/esport-tournaments/games.png",
    },
  ];
}
