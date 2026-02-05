import { inject, Injectable } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class IconConfigService {
    private readonly iconRegistry = inject(MatIconRegistry); 
    private readonly sanitizer = inject(DomSanitizer); 
    
    initIcons(): void {
        this.iconRegistry.addSvgIcon('linkedin', this.sanitizer.bypassSecurityTrustResourceUrl('icons/linkedin.svg'));
        this.iconRegistry.addSvgIcon('github', this.sanitizer.bypassSecurityTrustResourceUrl('icons/github.svg'));
        this.iconRegistry.addSvgIcon('download', this.sanitizer.bypassSecurityTrustResourceUrl('icons/download.svg'));
        this.iconRegistry.addSvgIcon('arrow_right', this.sanitizer.bypassSecurityTrustResourceUrl('icons/arrow-right.svg'));
    }
}