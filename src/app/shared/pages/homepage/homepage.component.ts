import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookListComponent } from "../../components/book-list/book-list.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CategoryListComponent } from "../../components/category-list/category-list.component";


@Component({
    standalone: true,
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.scss',
    imports: [CommonModule, FormsModule, BookListComponent, NavbarComponent, CategoryListComponent]
})
export class HomepageComponent {
}
