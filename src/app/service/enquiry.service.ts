import { Subject } from 'rxjs';
import { SnackbarService } from './snackbar.service';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Enquiry } from '../inerface/enquiry/enquiry';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  constructor(private db: AngularFirestore, private snack: SnackbarService) {}

  EnquiryFilled = new Subject<Enquiry[]>();

  Addenquiry(enquiry: Enquiry) {
    this.db
      .collection('enquiry')
      .add(enquiry)
      .then((re) => {
        console.log('success');
        this.snack.getsnackbar(
          'Enquiry Submitted We Will Get Back To Your Soon',
          null,
          4000
        );
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  getenquiry() {
    this.db
      .collection('enquiry')
      .valueChanges()
      .subscribe((re: Enquiry[]) => {
        this.EnquiryFilled.next(re);
      });
    }
}
