import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formBuilder: any;

  constructor(private router: Router) { }

  

  ngOnInit() {
    const contactForm = this.formBuilder.group({  
          email: ['', Validators.email],
          password: ['', Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{6,12}$")],
          mobile: ['', Validators.pattern("[1-9]{1}[0-9]{9}")],
          userName: ['', Validators.pattern("/^[a-z0-9]+$/i") ],
          
        });
  }

  

  model: any = {};

  onSubmit() {
    alert('Registered Successfully!!\n\n' + JSON.stringify(this.model));
    if(this.model.position==='administrator')
    {
      this.router.navigate(['/admin/books']);
    }
    else{
      this.router.navigate(['/user']);
    }
    
  }



}
