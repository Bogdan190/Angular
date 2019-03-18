import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private http: HttpClient) { }
  
  arr=[
    {
      text:'Реклама ремонта квартир ***',
      image:'./assets/1.jpg'
    },
    {
      text:'Реклама ремонта квартир',
      image:'./assets/1.jpg'
    }
  ];
  
  ngOnInit() {
    this.getTasks(123).subscribe((data) => {
      this.arr = data
      console.log(data);
    });
  }
  
  getTasks (data): Observable<any>{
    return this.http.get('http://localhost:3000/data')
  }

}


