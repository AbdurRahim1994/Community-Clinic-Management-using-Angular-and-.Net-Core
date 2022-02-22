import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../../models/Category/category';
import { CategoryService } from '../../../services/Category/category.service';
import { SnackNotifyService } from '../../../services/SnackBar/snack-notify.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  category: Category = new Category();
  categoryForm: FormGroup = new FormGroup({
    categoryName: new FormControl('', [Validators.required, Validators.maxLength(30)])
  });

  get f() {
    return this.categoryForm.controls;
  }

  update() {
    if (this.categoryForm.invalid) return;
    this.category.categoryName = this.f.categoryName.value;
    this.categorySvc.updateCategory(this.category).subscribe(d => {
      this.snackNotifySvc.success("Data Updated Successfully", "OK");
      this.categoryForm.reset({});
    }, err => {
      this.snackNotifySvc.fail("Oops! Update Failed", "DISMISS");
    })
  }

  constructor(private categorySvc: CategoryService, private snackNotifySvc: SnackNotifyService, private dialog: MatDialog, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id: number = this.activatedRoute.snapshot.params.id;
    this.categorySvc.getCategoryById(id).subscribe(x => {
      this.category = x;
      this.categoryForm.patchValue(this.category);
    }, err => {
      this.snackNotifySvc.fail("Data loading failed !!!", "DISMISS");
    })
  }

}
