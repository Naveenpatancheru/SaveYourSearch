import { value } from './../../common/models/bingWebSearchResponse';
import { BingWebSearchServices } from './../../common/services/bingWebSearch.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-savedbingsearch',
  templateUrl: './savedbingsearch.component.html',
  styleUrls: ['./savedbingsearch.component.css']
})
export class SavedbingsearchComponent implements OnInit {

 
  constructor(private bingWebSearchServices:BingWebSearchServices) { }
  urlInfo : value[]|null=null;
  ngOnInit():void {
    debugger;
    var loggedInUser = localStorage.getItem('LoggedUser');
    this.bingWebSearchServices.getUrlInfo(loggedInUser).subscribe( result=>{
      this.urlInfo=result;
    }
    
    );
    console.log(this.urlInfo);
  }

}
