 import { DashBoardService } from './../common/services/dashBoard.service';
import { DashBoard } from './../common/models/dashBoard';
import { Component, OnInit , ElementRef} from '@angular/core';

import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import { Headers, Http,RequestOptions, RequestMethod  } from '@angular/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'SaveYourSearch';
  photoUrl:string;
  name:string;
  dashBoard:DashBoard;
  id:string;
   ImagesCount:number;
   NotesCount:number;
   SavedSearchesCount:number;


  // public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  // public pieChartData = [120, 150, 180, 90];
  // public pieChartType = 'pie';

  // public pieChartOptions: ChartOptions = {
  //   responsive: true,
  // };

  // New code for getting dashboard

  public pieChartLabels: Label[] = ['Gallery','Notes', 'WebSearch', 'News'];
  // public pieChartData: SingleDataSet = [10, 40, 10,10];
 // public pieChartData: SingleDataSet;
 pieChartData:Array<any> = [
  { 
      data: []
  }
];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public chartColors: any[] = [
    { 
      backgroundColor:["#d9534f", "#5cb85c", "#0275d8", "#f0ad4e", "#f0ad4e"] 
    }];
//   public colors:[{
//     backgroundColor:"#F00",
//     hoverBackgroundColor:"#FF0",
//     borderColor:"#0F0",
//     hoverBorderColor:"#00F"
// }];
  constructor(private dashBoardService:DashBoardService) { 
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
 
  }

  ngOnInit() {
    // debugger;
    this.photoUrl=localStorage.getItem("UserFBUrl");
    this.name=localStorage.getItem("UserName");
    this.id=localStorage.getItem("LoggedUser");
    this.dashBoardService.getDashBoardInfo(this.id).subscribe( result=>{
      debugger;
      this.dashBoard=result;
      // this.ImagesCount =this.dashBoard.ImagesCount;
      // this.SavedSearchesCount =this.dashBoard.SavedSearchesCount;
      // this.NotesCount =+this.dashBoard.NotesCount;
      this.pieChartData=[this.dashBoard.imagesCount,this.dashBoard.notesCount,this.dashBoard.savedSearchesCount,10]
     
    })
  
   // this.pieChartData =[this.ImagesCount,this.SavedSearchesCount, this.SavedSearchesCount,10];
    //this.pieChartData = [Number(this.dashBoard.ImagesCount),Number(this.dashBoard.NotesCount),Number(this.dashBoard.SavedSearchesCount),10];
    
  }

}
