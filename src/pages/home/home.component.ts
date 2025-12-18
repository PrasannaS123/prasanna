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

  roles: string[] = ['Front-End', 'Flutter'];
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
    link.download = 'Prasanna_CV.pdf';
    link.click();
  }

  frontEndSkills = [
    { name: 'Angular', level: 94 },
    { name: 'TypeScript', level: 90 },
    { name: 'React', level: 88 },
    { name: 'Next.js', level: 85 },
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'BOOSTRAP', level: 92 },
    { name: 'SCSS', level: 85 },
    { name: 'JavaScript', level: 86 }
  ];


  mobileSkills = [
    { name: 'Flutter', level: 90 },
    { name: 'Dart', level: 88 }
  ];


  versionControlSkills = [
    { name: 'GitLab', level: 92 },
    { name: 'GitHub', level: 90 }
  ];


  otherSkills = [
    { name: 'Responsive Design', level: 95 },
    { name: 'REST APIs', level: 88 },
    { name: 'Firebase', level: 85 }
  ];


  @ViewChildren('progressFill') progressFills!: QueryList<ElementRef>;
  ngAfterViewInit(): void {
    const allSkills = [
      ...this.frontEndSkills,
      ...this.mobileSkills,
      ...this.versionControlSkills,
      ...this.otherSkills
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          const index = this.progressFills.toArray().findIndex(el => el.nativeElement === target);
          if (entry.isIntersecting) {
            target.style.width = allSkills[index].level + '%';
          } else {
            target.style.width = '0%';
          }
        });
      },
      { threshold: 0.3 }
    );

    this.progressFills.forEach((bar) => observer.observe(bar.nativeElement));
  }

}
