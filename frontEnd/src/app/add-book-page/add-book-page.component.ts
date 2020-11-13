import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookServicesService } from '../Services/book-services.service';

@Component({
  selector: 'app-add-book-page',
  templateUrl: './add-book-page.component.html',
  styleUrls: ['./add-book-page.component.css']
})
export class AddBookPageComponent implements OnInit {
  public addBookForm: FormGroup;

  constructor(private addBookGroupForm: FormBuilder,
    private addBookService: BookServicesService,
    public router: Router) { }

  ngOnInit(): void {
    this.addBookForm = this.addBookGroupForm.group({
      bookName: [""],
      description: [""],
      price: [""],
      imgUrl: [""],
    });
  }

  addBook() {
    console.log(this.addBookForm.value);

  }
}
