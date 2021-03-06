import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
   profileForm = this.fb.group({ // Control can be defined if control needs sync or async validation.
     firstName: this.fb.control('',Validators.required),
     lastName: this.fb.control(''),
     address: this.fb.group({
      street: (''),
      city: (''),
      state:(''),
      zip: ('')
    }),
      aliases: this.fb.array([
        this.fb.control('')
      ])
   });

   get aliases(){
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias(){
  this.aliases.push(this.fb.control(''));
  }
   updateProfile(){
     this.profileForm.patchValue({
       firstName:'Manish',
       lastName:'Shrestha',
       address:{
         street: '123 Drew Street'
       }
     })
   }
   onSubmit(){
    console.warn(this.profileForm.value);
    console.log(this.profileForm);
  }
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

  }

}
