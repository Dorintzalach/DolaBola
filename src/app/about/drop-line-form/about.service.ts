import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

const SERVER_URL = 'http://127.0.0.1:5000/';


@Injectable({
  providedIn: 'root'
})

export class AboutService {
  private dataStore = new BehaviorSubject<any>(null);
  sendEmailAnswer$: Observable<any> = this.dataStore.asObservable();

  constructor(private http: HttpClient) {
  }

  sendEmail(message) {
    console.log(message);
    this.http.post(SERVER_URL + 'sendEmail', message).subscribe((resData: any) => {
      this.dataStore.next(resData);
    });
  }
}
