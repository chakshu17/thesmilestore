import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../enquiry/dialog/dialog/dialog.component';

@Component({
  selector: 'app-enquirybutton',
  templateUrl: './enquirybutton.component.html',
  styleUrls: ['./enquirybutton.component.scss']
})
export class EnquirybuttonComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  onclick(){
    this.dialog.open(DialogComponent);
  }
}
