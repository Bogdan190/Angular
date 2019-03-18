import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
  
})
export class ExampleComponent implements OnInit {

  constructor() { }

  title = 0;
  arr=[
    {
      text:'Реклама ремонта квартир',
      image:'./assets/1.jpg'
    },
    {
      text:'Реклама ремонта квартир',
      image:'./assets/1.jpg'
    }
  ];

  ngOnInit(){
    console.log('!!!');
    const func = () => this.title++;
    setInterval(func,1000);
  }
  
  
  other(){

  }

}/*
var str=0;
for (var i = 0; i < 9; i++) {
  
  for (var j = 0; j < i; j++) {
 
    
    document.write(i);
  
  }
  document.write('<br>');

}*/
/* 2)
for(var i = 1; i < 101; i++){
  if(i % 3==0&&i % 5!=0 ){
     document.write(i+'Fizz'+'<br>');
  }else if (i % 5==0&&i % 3!=0 ) {
    document.write(i+'Buzz'+'<br>')
  }else if (i % 5==0&&i % 3==0 ) {
    document.write(i+'FizzBuzz'+'<br>')
  }
  
}

let str='';

for(var i = 1; i < 10; i++){
  document.write(str=str+'x');
  for(var j = 0; j < i; j++){
    document.write('<br>');
  }
}*/
