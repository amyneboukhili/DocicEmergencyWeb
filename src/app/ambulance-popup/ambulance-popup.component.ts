import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { provideAnimations } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-ambulance-popup',
  imports: [ 
    CommonModule,
   ],
  standalone: true,
  templateUrl: './ambulance-popup.component.html',
  styleUrl: './ambulance-popup.component.css',
  animations: [
      trigger('modalAnimation', [
        state(
          'void',
          style({
            opacity: 0,
            transform: 'scale(0.95)',
          })
        ),
        state(
          '*',
          style({
            opacity: 1,
            transform: 'scale(1)',
          })
        ),
        transition('void <=> *', animate('200ms ease-in-out')),
      ]),
    ],
    providers: [provideAnimations()],
  
})
export class AmbulancePopupComponent {

  @Input() isVisible: boolean = false;
  @Input() situation: string = '';
  @Input() recommendation: string = '';
  @Output() close = new EventEmitter<void>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isVisible'] && this.isVisible) {
      document.body.style.overflow = 'hidden';
    } else if (changes['isVisible'] && !this.isVisible) {
      document.body.style.overflow = 'auto';
    }
  }

  closeModal() {
    document.body.style.overflow = 'auto';
    this.close.emit();
  }

  onBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }

}
