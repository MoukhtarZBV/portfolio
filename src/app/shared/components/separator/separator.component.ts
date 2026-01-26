import { AfterViewInit, Component, ElementRef, input, ViewChild } from "@angular/core";

type Direction = "horizontal" | "vertical";

@Component ({
    selector: "app-separator",
    templateUrl: "separator.component.html",
    standalone: true,
    styleUrl: "separator.component.scss",
})
export class SeparatorComponent implements AfterViewInit {
    readonly direction = input<Direction>("horizontal");

    @ViewChild("separator") separatorRef!: ElementRef;

    ngAfterViewInit(): void {
        const separatorHtml = this.separatorRef.nativeElement as HTMLElement;
        separatorHtml.classList.add(this.direction());
    }
}