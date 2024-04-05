import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  form!: FormGroup;
  
  constructor(private _fb: FormBuilder) {}
  
    ngOnInit() {
      this.form=this._fb.group({
      Book_Name:[''],
      Author:[''],
      Price:[''],
      Genre:[''],
      Published_Date:[''],
      Country:[''],
      Description:['']
    })
    }

    submit()
    {
      console.log(this.form.value);
     
    }
}
