import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, CommonModule, NavbarComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ZedERP';

  ngOnInit(): void {
    initFlowbite();

    // No carregamento da página ou ao mudar temas, é melhor adicionar inline no `head` para evitar FOUC
    if (localStorage.getItem('color-theme') === 'dark' || (!localStorage.getItem('color-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Alterar os ícones dentro do botão com base nas configurações anteriores
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon') as HTMLElement | null;
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon') as HTMLElement | null;

    if (themeToggleDarkIcon && themeToggleLightIcon) {
      if (localStorage.getItem('color-theme') === 'dark' || (!localStorage.getItem('color-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        themeToggleLightIcon.classList.remove('hidden');
      } else {
        themeToggleDarkIcon.classList.remove('hidden');
      }

      const themeToggleBtn = document.getElementById('theme-toggle') as HTMLElement | null;

      if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
          // Alternar ícones dentro do botão
          themeToggleDarkIcon.classList.toggle('hidden');
          themeToggleLightIcon.classList.toggle('hidden');

          // Se foi configurado via localStorage anteriormente
          if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
              document.documentElement.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
            } else {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
            }

          // Se NÃO foi configurado via localStorage anteriormente
          } else {
            if (document.documentElement.classList.contains('dark')) {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
            } else {
              document.documentElement.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
            }
          }
        });
      }
    }
  }
}
