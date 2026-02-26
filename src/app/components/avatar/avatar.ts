import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-avatar',
  imports: [CommonModule],
  templateUrl: './avatar.html',
  styleUrl: './avatar.scss',
})
export class AvatarComponent {

  colorFondo= signal<string>('#3498db');
  tamano= signal<number>(150);
  tieneLentes= signal<boolean>(false);
  tipoExpresion= signal<number>(1);

  cambiarColor(event: Event) {
    const input = event.target as HTMLInputElement;
    this.colorFondo.set(input.value);
  }

  cambiarTamaño(event: Event) {
    const input = event.target as HTMLInputElement;
    this.tamano.set(parseInt(input.value));
  }
  
  toggleLentes() {
    this.tieneLentes.update(flag => !flag);

  }

  setExpresion(tipo: number) {
    this.tipoExpresion.set(tipo);
  }
}
