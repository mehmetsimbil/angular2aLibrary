import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookService } from '../../../shared/services/book.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.scss'
})
export class AddBookComponent implements OnInit{
  bookAddForm !: FormGroup ;
  constructor(private formBuilder:FormBuilder,
    private bookService:BookService){}
  
  
  ngOnInit(): void {
    this.createBookAddForm();
  }

  createBookAddForm(){
    this.bookAddForm = this.formBuilder.group({
      isbn:["",Validators.required],
      name:["",[Validators.required, Validators.minLength(2)]],
      pages:["",Validators.required],
      publisherId:["",Validators.required],
      language:["",Validators.required],
      categoryId:["",Validators.required],
      description:["",[Validators.required,Validators.minLength(8)]],
      unitsInStock:["",[Validators.required,Validators.min(0)]],
    })
}

add(){
  this.bookService.add(this.bookAddForm.value).subscribe(response=>{
   this.bookService.add;
   console.log("Başarıyla eklendi.");
  });
}}