import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionTitleComponent } from './accordion/accordion-title/accordion-title.component';
import { AccordionContentComponent } from './accordion/accordion-content/accordion-content.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    AccordionComponent,
    AccordionTitleComponent,
    AccordionContentComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
