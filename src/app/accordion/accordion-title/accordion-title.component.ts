import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-accordion-title',
  templateUrl: './accordion-title.component.html',
  styleUrls: ['./accordion-title.component.scss'],
})
export class AccordionTitleComponent {
  id?: number;

  @Output()
  toggleOpen = new EventEmitter<MouseEvent>();

  @HostListener('click')
  onClick() {
    this.toggleOpen.emit();
  }
}
