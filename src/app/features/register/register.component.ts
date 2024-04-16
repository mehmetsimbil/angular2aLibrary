import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from '../../core/services/register.service';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{
  constructor(private formBuilder : FormBuilder,
    private registerService:RegisterService)
    {}
    registerForm!:FormGroup;
   

    ngOnInit(): void {
      this.createRegisterForm();
    }

    createRegisterForm(){
      this.registerForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+}{":;\'?/<>,.=-]).{6,}$')]],
       });
    }
    onRegister(){
      this.registerService.Register(this.registerForm.value).subscribe(response=>{
        this.registerService.Register;
        console.log("Başarıyla eklendi.");
       });
    }
}
