import {
  Component,
  ContentChildren,
  HostBinding,
  QueryList,
} from '@angular/core';
import { AccordionContentComponent } from './accordion-content/accordion-content.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
  @ContentChildren(AccordionContentComponent, { descendants: true })
  private set queries(contents: QueryList<AccordionContentComponent>) {
    this._contentList = contents.toArray();
    this.contentList.forEach((content, index) => content.id === index);
  }

  @HostBinding('class.content-open') get isOpen() {
    return this.contentList.some((content) => content.state === 'open');
  }

  private _contentList: AccordionContentComponent[];

  get contentList() {
    return this._contentList;
  }
}
