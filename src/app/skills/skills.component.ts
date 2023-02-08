import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {



Arr : any[]
constructor(){
  this.Arr =[
    {
     

      skill: "bootstrap",
      value:40
    },


    {
      skill: "css",
      value:50
    },
    {
      skill: "js",
      value:70
    },
    {
      skill: "html" ,
      value:90
    }

  ]

}

}