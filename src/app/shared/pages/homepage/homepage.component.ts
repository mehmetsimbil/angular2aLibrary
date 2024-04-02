import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CategoryListComponent } from "../../components/category-list/category-list.component";
import { BookListComponent } from '../../../features/book/pages/book-list/book-list.component';



@Component({
    standalone: true,
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.scss',
    imports: [CommonModule, FormsModule, NavbarComponent, CategoryListComponent, BookListComponent]
})
export class HomepageComponent {
}
