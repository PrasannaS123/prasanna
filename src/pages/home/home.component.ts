import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  roles: string[] = ['Full-Stack', 'Angular', 'Next.js', 'Java & Spring Boot', 'Flutter'];
  currentRole: string = this.roles[0];
  fadeOut: boolean = false;
  private intervalId: any;

  ngOnInit(): void {
    let index = 0;
    this.intervalId = setInterval(() => {
      this.fadeOut = true;
      setTimeout(() => {
        index = (index + 1) % this.roles.length;
        this.currentRole = this.roles[index];
        this.fadeOut = false;
      }, 500);
    }, 2000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/PrasannaResume.pdf';
    link.download = 'PrasannaResume.pdf';
    link.click();
  }

  frontEndSkills = [
    { name: 'Angular', level: 94 },
    { name: 'Next.js & React', level: 90 },
    { name: 'TypeScript & JavaScript', level: 92 },
    { name: 'HTML5 & CSS3', level: 95 },
    { name: 'Tailwind CSS & Bootstrap', level: 92 },
    { name: 'Responsive Web Design', level: 95 }
  ];

  backendSkills = [
    { name: 'Java', level: 75 },
    { name: 'Spring Boot', level: 74 },
    { name: 'RESTful APIs & Integration', level: 78 },
    { name: 'PostgreSQL & SQL', level: 72 },
    { name: 'Backend Business Logic', level: 75 }
  ];

  mobileSkills = [
    { name: 'Flutter & Dart', level: 88 },
    { name: 'Cross-Platform Mobile Dev', level: 70 }
  ];

  toolsAndDevSkills = [
    { name: 'GitHub & GitLab', level: 92 },
    { name: 'Postman & API Testing', level: 90 },
    { name: 'AI-Assisted Development', level: 92 }
  ];

  @ViewChildren('progressFill') progressFills!: QueryList<ElementRef>;
  ngAfterViewInit(): void {
    const allSkills = [
      ...this.frontEndSkills,
      ...this.backendSkills,
      ...this.mobileSkills,
      ...this.toolsAndDevSkills
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          const index = this.progressFills.toArray().findIndex(el => el.nativeElement === target);
          if (index !== -1) {
            if (entry.isIntersecting) {
              target.style.width = allSkills[index].level + '%';
            } else {
              target.style.width = '0%';
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    this.progressFills.forEach((bar) => observer.observe(bar.nativeElement));
  }

}
