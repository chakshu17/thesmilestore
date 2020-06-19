import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snack:MatSnackBar) { }

  getsnackbar(message,action,duration){
    this.snack.open(message,action,{
      duration:duration
    })
  }
}
