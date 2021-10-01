import {
  Component,
  AfterContentInit,
  ContentChild,
  OnDestroy,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AccordionTitleComponent } from '../accordion-title/accordion-title.component';

@Component({
  selector: 'app-accordion-content',
  templateUrl: './accordion-content.component.html',
  styleUrls: ['./accordion-content.component.scss'],
})
export class AccordionContentComponent implements AfterContentInit, OnDestroy {
  state?: String;
  id?: number;

  private destroy$ = new Subject<void>();

  @ContentChild(AccordionContentComponent, { static: true })
  private accordionTitle: AccordionTitleComponent;

  constructor() {}

  ngAfterContentInit() {
    this.accordionTitle.toggleOpen
      .asObservable()
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.openCollapse());
  }

  openCollapse() {}

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
