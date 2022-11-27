import { Component, TemplateRef, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  modalRef?: BsModalRef;
  height: string = '';
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
   
  }
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    setTimeout(() => {
      // this.height = document.querySelector('.modal-header')?.clientHeight.toString() + 'px';
      // console.log(this.height) 
    });
  }
}
