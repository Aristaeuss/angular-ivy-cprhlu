import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-content',
  templateUrl: './accordion-content.component.html',
  styleUrls: ['./accordion-content.component.scss'],
})
export class AccordionContentComponent implements OnInit {
  state?: String;
  id?: number;

  constructor() {}

  ngOnInit() {}
}
