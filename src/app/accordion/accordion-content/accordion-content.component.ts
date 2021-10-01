import {
  Component,
  AfterContentInit,
  ContentChild,
  OnDestroy,
  HostBinding,
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
  @HostBinding('class')
  state: OpenState = 'collapse';

  private destroy$ = new Subject<void>();

  @ContentChild(AccordionContentComponent, { static: true })
  private accordionTitle: AccordionTitleComponent;

  private _id: number;

  constructor() {}

  ngAfterContentInit() {
    this.accordionTitle.toggleOpen
      .asObservable()
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.openCollapse());
  }

  set id(val) {
    this._id = val;
  }

  get id() {
    return this._id;
  }

  openCollapse() {
    this.updateState();
  }

  private updateState() {
    this.state = this.state === 'collapse' ? 'open' : 'collapse';
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

type OpenState = 'open' | 'collapse';
