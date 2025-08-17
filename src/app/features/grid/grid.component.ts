import { NgFor } from "@angular/common";
import { Component, ElementRef, HostListener, OnInit, ViewChild } from "@angular/core";

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
    standalone: true
})
export class GridComponent implements OnInit {
    @ViewChild('gridContainer', { static: true }) gridRef!: ElementRef<HTMLDivElement>;

    cellSize = 50;
    rows: number = 0;
    cols: number = 0;
    rowsOffset: number = 1;
    colsOffset: number = 5;
    cells: number[] = [];

    ngOnInit() {
        this.updateGrid();
    }

    @HostListener('window:resize')
    onResize() {
        this.updateGrid();
    }

    updateGrid() {
        const width = this.gridRef.nativeElement.clientWidth;
        const height = this.gridRef.nativeElement.clientHeight;

        this.cols = Math.floor(width / this.cellSize);
        this.rows = Math.floor(height / this.cellSize);

        this.cells = Array.from({ length: (this.cols + this.colsOffset) * (this.rows + this.rowsOffset) }, (_, i) => i);
    }
}