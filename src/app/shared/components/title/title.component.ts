import { AfterViewInit, Component, ElementRef, input, OnInit, ViewChild } from "@angular/core";

type TitleSize = "small" | "medium" | "big";
type CapitalPosition = "above" | "below";

@Component ({
    selector: "app-title",
    templateUrl: "title.component.html",
    standalone: true,
    styleUrl: "title.component.scss",
})
export class TitleComponent implements AfterViewInit {
    readonly title = input.required<string>();
    readonly size = input<TitleSize>("medium");
    readonly capitalPosition = input<CapitalPosition>("above");

    protected capitalLetter!: string;
    protected remainingText!: string;

    @ViewChild("titleContainer") titleContainer!: ElementRef;

    ngAfterViewInit(): void {
        this.capitalLetter = this.title()[0].toUpperCase();
        this.remainingText = this.title().slice(1).toUpperCase();

        const htmlElement = this.titleContainer.nativeElement as HTMLElement;
        if (this.capitalPosition() == "below") {
            htmlElement.style.alignItems = "start"; 
        }
        htmlElement.classList.add(this.size());
    }
}