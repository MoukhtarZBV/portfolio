import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Hackathon Project',
      description: 'Developed an innovative solution during a 48-hour hackathon, focusing on sustainability and user experience.',
      technologies: ['Angular', 'TypeScript', 'Node.js']
    },
    {
      title: 'API Development',
      description: 'Built a RESTful API for a mobile application with authentication, data validation, and real-time updates.',
      technologies: ['.NET', 'C#', 'SQL Server']
    },
    {
      title: 'Web Application',
      description: 'Full-stack web application with modern UI/UX design and responsive layout.',
      technologies: ['React', 'Express', 'MongoDB']
    }
  ];
}
