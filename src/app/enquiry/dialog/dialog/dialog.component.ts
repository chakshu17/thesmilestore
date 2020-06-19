import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { EnquiryService } from 'src/app/service/enquiry.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(private service: EnquiryService) {}
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  onclick(f: NgForm) {
    this.service.Addenquiry({
      name: f.value.name,
      email: f.value.email,
      mobile: f.value.number,
      Description: f.value.Description,
      Date:new Date(),
    });
  }
}
