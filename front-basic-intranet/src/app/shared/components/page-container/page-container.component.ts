import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.css']
})
export class PageContainerComponent implements OnInit {
  @Input() template!: TemplateRef<any>;
  constructor() {
  }

  ngOnInit(): void {
  }

}
