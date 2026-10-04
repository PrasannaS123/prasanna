import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
  companyprojects = [
    {
      title: 'iPickup Platform',
      image: 'assets/projects/ipickup.jpg',
      description:
        'A comprehensive customer-facing ordering platform that enables customers to browse products, place orders, and collect orders from vendors. Contributed to customer web application features including product discovery, search, cart, subscriptions with daily/weekly/monthly schedules, location-based pickup scheduling, and vendor-side order processing dashboards.',
      duration: 'May 2026 – Present',
      tools: 'Next.js, React, TypeScript, Angular, Java, Spring Boot, REST APIs, PostgreSQL',
      role: 'Full-Stack Developer (Customer & Vendor Modules, REST APIs)',
    },
    {
      title: 'Megha ERP – Gold Manufacturing',
      image: 'assets/projects/golderp.jpg',
      description:
        'Enterprise resource planning (ERP) platform for gold manufacturing and process management. Developed and enhanced responsive Angular frontend modules for manufacturing workflows, inventory tracking, and operational management. Contributed to Java & Spring Boot backend APIs and data flow optimization.',
      duration: 'Feb 2026 – Mar 2026',
      tools: 'Angular, TypeScript, Java, Spring Boot, REST APIs, PostgreSQL',
      role: 'Full-Stack Developer (Frontend Modules & Backend APIs)',
    },
    {
      title: 'Jamindhar – Hostel Management',
      image: 'assets/projects/hostel.jpg',
      description:
        'Hostel allocation and facilities management application. Implemented responsive Angular UI interfaces supporting room allocation, occupancy tracking, and facilities management. Integrated REST APIs and contributed to Java and Spring Boot backend services.',
      duration: 'Apr 2026 – Present',
      tools: 'Angular, TypeScript, Java, Spring Boot, REST APIs, PostgreSQL',
      role: 'Full-Stack Developer (UI Modules & Backend APIs)',
    },
    {
      title: 'Postcargo',
      image: 'assets/projects/postcargo.jpg',
      description:
        'A modern web solution built to streamline cargo and logistics operations for the Postcargo platform. The system enables efficient shipment management and real-time delivery tracking, improving workflow speed and providing a smooth, reliable experience for both employees and customers.',
      duration: 'Dec 2023 – Jan 2024',
      tools: 'Angular, TypeScript, Bootstrap, HTML5, CSS, REST API, GitLab',
      role: 'Front-End Developer (UI & API Integration)',
    },
    {
      title: 'Azerpost',
      image: 'assets/projects/azerpost.jpg',
      description:
        'A digital transformation project for Azerbaijan’s national postal service, developed to modernize postal operations and enhance user experience. The platform supports real-time service tracking, efficient data exchange, and a user-friendly interface for both staff and customers.',
      duration: 'Jan 2024 – Apr 2024',
      tools: 'Angular, TypeScript, Bootstrap, HTML5, CSS, REST API, GitLab',
      role: 'Front-End Developer (UI & API Integration)',
    },
    {
      title: 'Fastkart Web App',
      image: 'assets/projects/fastkart.jpg',
      description:
        'A feature-rich e-commerce platform designed to offer a smooth online shopping experience. It provides intuitive product browsing, secure purchasing, and optimized performance across devices, ensuring seamless interaction and improved customer satisfaction.',
      duration: 'May 2024 – Jun 2024',
      tools: 'Angular, TypeScript, Bootstrap, HTML5, CSS, REST API, GitLab',
      role: 'Front-End Developer (UI & API Integration)',
    },
    {
      title: 'Ship2myId – Reports Module',
      image: 'assets/projects/ship2myid.jpg',
      description:
        'A comprehensive reporting module built to deliver actionable insights for shipping data management. It enables users to monitor, analyze, and track real-time shipment metrics through dynamic charts and detailed dashboards. The interface was designed to be intuitive, responsive, and data-driven using Angular and RESTful APIs.',
      duration: 'Jun 2024 – Jul 2024',
      tools: 'Angular, TypeScript, Bootstrap, HTML5, CSS, REST API, GitLab',
      role: 'Front-End Developer (UI & API Integration)',
    },
    {
      title: 'SuperAdmin Portal',
      image: 'assets/projects/superadmin.jpg',
      description:
        'A comprehensive administrative portal designed to streamline user, role, and configuration management. Built with a responsive Angular interface and seamless API integration, it enhances operational efficiency and provides full control for system administrators.',
      duration: 'Aug 2024 – Nov 2024',
      tools: 'Angular, TypeScript, Bootstrap, HTML5, CSS, REST API, GitLab',
      role: 'Front-End Developer (UI & API Integration)',
    },
    {
      title: 'Dreami Foundation',
      image: 'assets/projects/dreami.jpg',
      description:
        'A responsive and visually engaging web platform created to highlight and support the educational programs of the Dreami Foundation. The project focused on building an elegant UI with smooth navigation, dynamic content sections, and accessibility in mind.',
      duration: 'Jul 2024 – Aug 2024',
      tools: 'Angular, TypeScript, Bootstrap, HTML5, CSS, GitLab',
      role: 'Front-End Developer (UI Design)',
    },
    {
      title: 'RDB Website',
      image: 'assets/projects/rdb.jpg',
      description:
        'A modern, responsive website built for RDB to showcase its brand identity and services with an elegant user interface. The project focused on delivering a smooth user experience across devices, optimized layouts, and visually engaging components to enhance customer interaction.',
      duration: 'Dec 2024 – Jan 2025',
      tools: 'Angular, TypeScript, Bootstrap, HTML5, CSS, GitLab',
      role: 'Front-End Developer (UI Design & Development)',
    },
    {
      title: 'SANMBA Website',
      image: 'assets/projects/sanmba.jpg',
      description:
        'A responsive and visually dynamic college website developed to enhance online presence and engagement for SANMBA College. The project focused on creating a modern, accessible interface with dedicated sections for faculty profiles, campus insights, and event highlights, ensuring a seamless browsing experience across devices while maintaining visual consistency and performance optimization.',
      duration: 'Jan 2025 – Feb 2025',
      tools: 'Angular, TypeScript, Bootstrap, HTML5, CSS, REST API, GitLab',
      role: 'Front-End Developer (UI Design & Development)',
    },
    {
      title: 'Agent Frontend (CHIT-FUNDS)',
      image: 'assets/projects/chitfunds.jpg',
      description:
        'An intuitive and responsive administrative frontend developed for the CHIT-FUNDS platform, designed to streamline operations for agents through a structured and accessible dashboard. The interface supports efficient management of customers, chit groups, and transactions, integrating RESTful APIs to ensure real-time data handling, enhanced performance, and a seamless user experience across devices.',
      duration: 'Feb 2025 – Mar 2025',
      tools: 'Angular, TypeScript, Bootstrap, HTML5, CSS, REST API, GitLab',
      role: 'Front-End Developer (UI & API Integration)',
    },
    {
      title: 'EzyCampus Parent App',
      image: 'assets/projects/parentapp.jpg',
      description:
        'A mobile application developed using Flutter and Dart, designed to help parents stay connected with their child’s academic progress. The app allows real-time tracking of attendance, homework, timetables, and notifications through a smooth and responsive interface. Built with a focus on usability, scalability, and seamless performance, it delivers a reliable and intuitive experience for parents and is currently available on the Google Play Store.',
      duration: 'Apr 2025 – Jun 2025',
      tools: 'Flutter, Dart, REST API, Firebase, GitLab',
      role: 'Flutter Developer (UI & App Development)',
    },
    {
      title: 'EzyCampus Staff App',
      image: 'assets/projects/staffapp.jpg',
      description:
        'A cross-platform application developed using Flutter and Dart, primarily targeting the web platform for staff use. The app enables teachers and administrators to manage student attendance, schedules, and notifications efficiently through an intuitive dashboard. Featuring a fully developed home module and ongoing enhancements, it delivers smooth performance, scalability, and a consistent user experience across web and mobile.',
      duration: 'Jun 2025 – Dec 2025',
      tools: 'Flutter, Dart, REST API, Firebase, GitLab',
      role: 'Flutter Developer (UI & App Development)',
    }
  ];

  freelanceproject = [
    {
      title: 'Indrio Automation',
      image: 'assets/projects/automation.jpg',
      description:
        'A modern and fully responsive website interface designed for Indrio Automation, showcasing industrial solutions and services with clarity and precision. Configured domain management, DNS routing, and Cloudflare deployment while ensuring optimized performance across all devices.',
      duration: 'Dec 2025 – Jan 2026',
      tools: 'Angular, TypeScript, Bootstrap, HTML5, CSS, Cloudflare',
      role: 'Freelance Front-End Developer',
      link: 'https://www.indrioautomation.com/'
    },
    {
      title: 'Jaja Finex',
      image: 'assets/projects/jaja-finex.jpg',
      description:
        'A modern and feature-rich online trading and investment platform interface built for Jaja Finex. Presents trading services and company information with clean layouts, cross-device responsiveness, and complete domain and production deployment setup.',
      duration: 'Dec 2025 – Jan 2026',
      tools: 'Angular, TypeScript, Responsive Web Design, Cloudflare',
      role: 'Freelance Front-End Developer',
      link: 'https://www.jajafinex.com/'
    }
  ];

  paginatedcompanyProjects: any[] = [];
  currentCompanyPage = 1;
  itemsPerCompanyPage = 3;
  totalCompanyPages = 0;

  paginatedfreelanceProjects: any[] = [];
  currentfreelancePage = 1;
  itemsPerfreelancePage = 3;
  totalfreelancePages = 0;

  ngOnInit() {
    this.updateCompanyItemsPerPage();
    this.updateCompanyPaginatedProjects();
    this.updateCFreelanceItemsPerPage();
    this.updateFreelancePaginatedProjects();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateCompanyItemsPerPage();
    this.updateCFreelanceItemsPerPage();
  }


  updateCompanyItemsPerPage() {
    const width = window.innerWidth;
    let newItemsPerPage = 3;

    if (width <= 767) {
      newItemsPerPage = 1;
    } else if (width <= 1199) {
      newItemsPerPage = 2;
    } else {
      newItemsPerPage = 3;
    }

    if (newItemsPerPage !== this.itemsPerCompanyPage) {
      this.itemsPerCompanyPage = newItemsPerPage;
      this.currentCompanyPage = 1;
      this.updateCompanyPaginatedProjects();
    }
  }

  updateCFreelanceItemsPerPage() {
    const width = window.innerWidth;
    let newItemsPerPage = 3;

    if (width <= 767) {
      newItemsPerPage = 1;
    } else if (width <= 1199) {
      newItemsPerPage = 2;
    } else {
      newItemsPerPage = 3;
    }

    if (newItemsPerPage !== this.itemsPerfreelancePage) {
      this.itemsPerfreelancePage = newItemsPerPage;
      this.currentfreelancePage = 1;
      this.updateFreelancePaginatedProjects();
    }
  }

  updateCompanyPaginatedProjects() {
    const startIndex = (this.currentCompanyPage - 1) * this.itemsPerCompanyPage;
    const endIndex = startIndex + this.itemsPerCompanyPage;
    this.paginatedcompanyProjects = this.companyprojects.slice(startIndex, endIndex);
    this.totalCompanyPages = Math.ceil(this.companyprojects.length / this.itemsPerCompanyPage);
  }

  updateFreelancePaginatedProjects() {
    const startIndex = (this.currentfreelancePage - 1) * this.itemsPerfreelancePage;
    const endIndex = startIndex + this.itemsPerfreelancePage;
    this.paginatedfreelanceProjects = this.freelanceproject.slice(startIndex, endIndex);
    this.totalfreelancePages = Math.ceil(this.freelanceproject.length / this.itemsPerfreelancePage);
  }

  nextPage() {
    if (this.currentCompanyPage < this.totalCompanyPages) {
      this.currentCompanyPage++;
      this.updateCompanyPaginatedProjects();
    }
  }

  prevPage() {
    if (this.currentCompanyPage > 1) {
      this.currentCompanyPage--;
      this.updateCompanyPaginatedProjects();
    }
  }

  nextPageFreelance() {
    if (this.currentfreelancePage < this.totalfreelancePages) {
      this.currentfreelancePage++;
      this.updateFreelancePaginatedProjects();
    }
  }

  prevPageFreelance() {
    if (this.currentfreelancePage > 1) {
      this.currentfreelancePage--;
      this.updateFreelancePaginatedProjects();
    }
  }
}
