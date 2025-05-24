import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  
  isLoggedIn:boolean = true

  @Output()
  contentLoad = new EventEmitter<string>();

  ngOnInit(): void {
    if(typeof localStorage !== 'undefined' && localStorage.getItem("token")){
      this.isLoggedIn = true;
    }
  }

  loadContent(page:any){
    this.contentLoad.emit(page)
  }

}
