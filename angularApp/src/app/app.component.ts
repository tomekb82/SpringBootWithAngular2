import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  selectedItem = '';
  
  //declare a variable to hold class name:
    public my_Class = 'active';
    
    
    //function to change the class from style1 to style 2 when clicked
    toggle_class(){
        if(this.my_Class=="active"){
            this.my_Class='';
        }else{
            this.my_Class='active';
        }
    }
}
