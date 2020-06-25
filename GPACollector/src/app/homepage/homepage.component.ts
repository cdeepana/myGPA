import { Component, OnInit } from '@angular/core';
import { TestingApiService } from '../_services/testing-api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private TestingService: TestingApiService) { }

  ngOnInit(): void {
  }

  getData(){
    console.log("component clicked");
    this.TestingService.getData().subscribe((data)=> {
      console.log(data);
    });
    // console.log("x =>",x);
    return ;
  }

}
