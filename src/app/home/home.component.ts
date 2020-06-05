import { Component, OnInit , ElementRef} from '@angular/core';

import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'SaveYourSearch';
  photoUrl:string;
  name:string;
  // public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  // public pieChartData = [120, 150, 180, 90];
  // public pieChartType = 'pie';

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Gallery', 'WebSearch', 'Notes','News'];
  public pieChartData: SingleDataSet = [10, 40, 10,10];
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







  constructor() { 
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
 
  }

  ngOnInit() {
    this.photoUrl=localStorage.getItem("UserFBUrl");
    this.name=localStorage.getItem("UserName");
  }

}
