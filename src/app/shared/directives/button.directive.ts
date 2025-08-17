import { Directive, HostBinding, Input, OnInit } from "@angular/core";

export type ButtonTheme = 'hollow' | 'filled' | 'gradient';

@Directive({
    selector: '[customButton]'
})
export class CustomButtonDirective implements OnInit {
    private _theme: ButtonTheme = 'hollow';

    @HostBinding('class.hollow') isHollow = false;
    @HostBinding('class.filled') isFilled = false;
    @HostBinding('class.gradient') isGradient = false;

    @Input()
    set theme(value: ButtonTheme) {
        this._theme = value;
        this.updateThemeClasses();
    }

    private updateThemeClasses() {
        this.isHollow = this._theme === 'hollow';
        this.isFilled = this._theme === 'filled';
        this.isGradient = this._theme === 'gradient';
    }

    ngOnInit(): void {
        this.updateThemeClasses();
    }
}