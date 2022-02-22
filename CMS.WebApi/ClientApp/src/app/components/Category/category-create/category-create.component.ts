import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Category } from '../../../models/Category/category';
import { CategoryService } from '../../../services/Category/category.service';
import { SnackNotifyService } from '../../../services/SnackBar/snack-notify.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  category: Category = new Category();
  categoryForm: FormGroup = new FormGroup({
    categoryName: new FormControl('', [Validators.required, Validators.maxLength(30)])
  });

  get f() {
    return this.categoryForm.controls;
  }

  insert() {
    if (this.categoryForm.invalid) return;
    this.category.categoryName = this.f.categoryName.value;
    this.categorySvc.insertCategory(this.category).subscribe(d => {
      this.snackNotifySvc.success("Data Insert Successfully", "OK");
      this.categoryForm.reset({});
    }, err => {
      this.snackNotifySvc.fail("Oops! Insert Failed", "DISMISS");
    })
  }

  constructor(private categorySvc: CategoryService, private snackNotifySvc: SnackNotifyService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
