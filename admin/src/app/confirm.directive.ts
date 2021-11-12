import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
    selector: '[confirm]'
})
export class ConfirmDirective {
    @Output() public confirm: EventEmitter<any> = new EventEmitter<any>();

    @HostListener('click')
    public click() {
        if (!confirm('Are you sure?')) {
            return;
        }

        this.confirm.emit();
    }
}
