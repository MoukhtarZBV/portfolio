import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      role: 'Software Engineering Intern',
      company: 'Michelin',
      period: 'June 2024 - August 2024',
      location: 'Clermont-Ferrand, France',
      description: [
        'Developed full-stack web applications using Angular and .NET',
        'Implemented RESTful APIs and database solutions',
        'Collaborated with cross-functional teams in an Agile environment'
      ]
    },
    {
      role: 'Research Intern',
      company: 'IRIT Laboratory',
      period: 'May 2023 - July 2023',
      location: 'Toulouse, France',
      description: [
        'Conducted research on AI and machine learning applications',
        'Developed prototypes for data analysis tools',
        'Presented findings to research team'
      ]
    }
  ];
}
