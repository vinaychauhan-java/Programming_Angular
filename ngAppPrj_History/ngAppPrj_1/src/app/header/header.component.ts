import { Component, EventEmitter, Output } from "@angular/core";

// Component Header wherin JavaScript object is passed
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    @Output() featureSelected = new EventEmitter<string>();

    onSelect(feature: string) {
        this.featureSelected.emit(feature);
    }
}