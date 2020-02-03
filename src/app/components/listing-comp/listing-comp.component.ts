import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listing-comp',
  templateUrl: './listing-comp.component.html',
  styleUrls: ['./listing-comp.component.css']
})
export class ListingCompComponent implements OnInit {
  alldata: any=[]
  constructor(private htp:HttpClient) {
    this.htp.get("https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=33ba70d6367648b49a76910dfad62ad4").subscribe(data=>
    this.alldata=data)
    ;

   }


  ngOnInit() {
  }

}
