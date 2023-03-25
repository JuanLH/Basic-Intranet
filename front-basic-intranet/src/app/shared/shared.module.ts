import { NgModule } from '@angular/core';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { PageContainerComponent } from './components/page-container/page-container.component';



@NgModule({
  declarations: [
    PageContainerComponent
  ],
  imports: [
    CommonModule,
    NgTemplateOutlet
  ],
  exports:[PageContainerComponent]
})
export class SharedModule { }
