import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CloseModalService {
  closeModal(modalId: string) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.classList.remove('overflow-hidden');

      const backdrop = document.querySelector('.bg-gray-900\\/50, .dark\\:bg-gray-900\\/80');
      if (backdrop) {
        backdrop.remove();
      }
    }
  }
}
