import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mat-pagination',
  templateUrl: './mat-pagination.component.html',
  styleUrls: ['./mat-pagination.component.css']
})
export class MatPaginationComponent {
 @Input() currentPage!: number;
  @Input() totalPages!: number;
  @Output() pageChanged = new EventEmitter<number>();

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.pageChanged.emit(page);
    }
  }
  onPageChanged(page: number) {
    this.currentPage = page;
    alert(this.currentPage);
  // Fetch data for the new page or update your data as needed
  }
}
