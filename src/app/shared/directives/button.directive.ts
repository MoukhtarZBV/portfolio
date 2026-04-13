import { Directive, HostBinding, Input, OnInit } from "@angular/core";

export type ButtonTheme = 'normal' | 'filled' | 'gradient';

@Directive({
    selector: '[customButton]'
})
export class CustomButtonDirective {
    private _theme: ButtonTheme = 'normal';

    @HostBinding('class.normal') isNormal = this._theme === 'normal';
    @HostBinding('class.filled') isFilled = this._theme === 'filled';
    @HostBinding('class.gradient') isGradient = this._theme === 'gradient';

    @Input()
    set theme(value: ButtonTheme) {
        this._theme = value;
    }
}