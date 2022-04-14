import { Component, OnInit } from '@angular/core';
import { ReceptModel } from '../recept-model';
import {OrderListModule} from 'primeng/orderlist';
//import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recepts: ReceptModel[]=[];
  visibility: boolean = true;
  constructor(/*private http: HttpClient*/) { }

  ngOnInit(): void {

    this.recepts=[
      {id: 0, name:'First recept', description:'some text here1'},
      {id: 1, name: 'Second recept', description:'some text here2'},
      {id: 2, name: 'Third recept', description:'some text here3'},
    ];
    this.setTimeout();
  }

  addMore(){
    var counter = this.recepts.length;
    this.recepts.push({id:counter, name: 'New recept', description: 'some new text here'});  
  }
  setTimeout(){
    setTimeout(()=>{
      if(this.visibility === true)
        this.visibility = false;
      else
        this.visibility = true;
      this.setTimeout();
    },5000)
  }

  apiCall(){
   /* //some data for backend call
    const params = {
      data: ''
    }
    //stringify data
    const jsonParams = JSON.stringify(params);

    this.http.put<any>("/someApiLinkHere", (jsonParams),{
      headers:{
        "Content-Type":"application/json"
      }
    }).subscribe((resp: any) =>{
      
        //got the response from api in resp 
        //console.log(resp);
    });
*/
  }

}
