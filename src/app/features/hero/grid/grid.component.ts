import { NgFor } from "@angular/common";
import { Component, ElementRef, HostListener, OnInit, ViewChild } from "@angular/core";

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrl: './grid.component.scss',
    standalone: true
})
export class GridComponent implements OnInit {
    @ViewChild('gridContainer', { static: true }) gridRef!: ElementRef<HTMLDivElement>;

    cellSize = 45;
    rows!: Array<number>;
    cols!: Array<number>;
    rowsOffset: number = 1;
    colsOffset: number = 5;

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

        this.cols = Array.from({ length: (Math.floor(width / this.cellSize) + this.colsOffset) }, (_, i) => i);
        this.rows = Array.from({ length: (Math.floor(height / this.cellSize) + this.rowsOffset) }, (_, i) => i);
    }
}