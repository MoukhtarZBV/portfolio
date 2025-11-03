import { AfterViewInit, Component, ElementRef, inject, input, OnInit, ViewChild } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

const MAX_ROTATION_ANGLE = 35;
const MAX_BOTTOM_SHADOW = 90;
const MAX_CHECK_INTERVAL = 14;

@Component({
    selector: 'app-animated-card',
    templateUrl: './animated-card.component.html',
    styleUrl: './animated-card.component.scss',
    imports: [
        MatIconModule
    ]
})
export class AnimatedCardComponent implements AfterViewInit {
    @ViewChild('card') cardRef!: ElementRef;
    @ViewChild('wrapper') wrapperRef!: ElementRef;

    // Cursor's X and Y positions (Relative to the whole card)
    private mouseX!: number;
    private mouseY!: number;

    // Middle point of the card
    private middleX!: number;
    private middleY!: number;

    // 3D rotation for both axis
    private mouseXRelative!: number;
    private rotationX!: number;
    private mouseYRelative!: number;
    private rotationY!: number;

    // Side of the shadows/lights to cast
    private bottomShadow!: number;
    private sideShadow!: number;

    // Intensity of the shadows/lights to cast
    private shadeOfBlack!: number;
    private shadowColor!: string;

    ngAfterViewInit() {
        this.addEventListenerToCard();
    }

    /**
     * Rotates, in a 3D dimension style, the card towards the cursor and applies a shadow/light
     * based on the facing direction (Shadow when facing bottom, light when facing top)
     * 
     * @param {Event} event         The moved mouse cursor
     */
    private rotateToCursor(event: Event) {
        const mouseEvent = event as MouseEvent;
        this.mouseX = mouseEvent.offsetX;
        this.mouseY = mouseEvent.offsetY;
        
        // Middle point of the card
        this.middleX = this.wrapperRef.nativeElement.offsetWidth / 2;
        this.middleY = this.wrapperRef.nativeElement.offsetHeight / 2;
        
        // 3D rotation for both axis
        this.mouseXRelative = - (1 - (this.mouseX / this.middleX));
        this.rotationX = this.mouseXRelative * MAX_ROTATION_ANGLE;
        this.mouseYRelative = 1 - (this.mouseY / this.middleY);
        this.rotationY = this.mouseYRelative * MAX_ROTATION_ANGLE;
        
        // Shadows casted
        this.bottomShadow = this.mouseYRelative * MAX_BOTTOM_SHADOW;
        this.sideShadow = this.mouseXRelative * MAX_BOTTOM_SHADOW;
        
        this.shadeOfBlack = this.mouseYRelative * 127;
        this.shadowColor = `rgb(${this.shadeOfBlack}, ${this.shadeOfBlack}, ${this.shadeOfBlack})`;
        
        this.cardRef.nativeElement.style.transform = `perspective(800px) rotate3d(0, 1, 0, ${this.rotationX}deg) rotate3d(1, 0, 0, ${this.rotationY}deg)`;
        this.cardRef.nativeElement.style.boxShadow = `inset ${-this.sideShadow}px ${this.bottomShadow}px 60px 0px ${this.shadowColor}`;
    }

    /**
     * Resets the card's rotation to make it face the screen
     */
    private resetRotation() {
        this.cardRef.nativeElement.style = `transform: rotate3d(0, 0, 0, 0deg)`;
    }

    /**
     * Throttles the given function with a given maximum amount of execution per second,
     * very usefull here as the 'mousemove' event is triggered frequently
     * 
     * @param {T} func          The function to throttle
     * @param {number} limit    The limit of execution of the function per second
     * @returns 
     */
    private throttle<T extends (...args: any[]) => void>(func: T, limit: number): T {
        let inThrottle = false;

        const throttled = ((...args: Parameters<T>) => {
            if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
            }
        }) as T;

        return throttled;
    }


    /**
     * Add the event listeners for both the 'mouse moved' and 'mouse exited' events to the card
     */
    private addEventListenerToCard() {
        const wrapper = this.wrapperRef.nativeElement as HTMLElement;
        wrapper.addEventListener("mousemove", this.throttle((event: MouseEvent) => {
            console.log("Moved");
            console.log(event);
            this.rotateToCursor(event);
        }, MAX_CHECK_INTERVAL));
        
        wrapper.addEventListener("mouseout", () => {
            this.resetRotation();
            console.log("Exited");
        });
    }
}