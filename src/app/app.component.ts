import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: String | undefined;
  result: String | undefined;

  constructor(private http: HttpClient) { }

  postData() {

    let url = "http://localhost:8080/users"

    this.http.post(url, {
      name: this.name
    }).toPromise().then((data: any) => {
      this.result = JSON.stringify(data.json.name)
    }).catch(error => console.log(error))
  }

}
