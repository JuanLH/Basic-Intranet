import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [
    {title:"Home", route:"/"},
    {title:"About Us", route:"/about"},
    {title:"News", route:"/news"},
    {title:"Events", route:"/events"},
    {title:"S/C Form", route:"/scform"}
  ];

  selectedIndex = -1;

  constructor() { }

  ngOnInit(): void {
  }

  onItemClick(index: number) {
    this.selectedIndex = index;
  }

}
export interface MenuItem {
  title: string;
  route: string;
}
