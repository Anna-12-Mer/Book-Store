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
  public body: any;
  public isSbmitted = false;
  public disabled: boolean = false;
  public invalid: boolean = false;


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
    this.body = {
      'nameBook': this.addBookForm.value.bookName,
      'description': this.addBookForm.value.description,
      'price': this.addBookForm.value.price,
      'imageUrl': this.addBookForm.value.imgUrl,
    }
    console.log('this body', this.body);
    this.addBookService.addBook(this.body).subscribe((data: any) => {
      this.isSbmitted = true;
      this.disabled = false;
    }, (error: any) => {
      console.log(error);
      this.invalid = true;
      this.disabled = false;
    });


  }
}
