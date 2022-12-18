import { Component, OnDestroy } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../services/toast.service';
import { ToastsContainer } from './toasts-container.component';



@Component({
	selector: 'ngbd-toast-global',
	standalone: true,
	imports: [NgbTooltipModule, ToastsContainer],
	templateUrl: './toast.component.html',
})
export class NgbdToastGlobal implements OnDestroy {
	constructor(public toastService: ToastService) {}

	showStandard() {
		this.toastService.show('I am a standard toast');
	}

	showSuccess() {
		this.toastService.show('I am a success toast', { classname: 'bg-success text-light', delay: 2000 });
	}

	showDanger(dangerTpl : any) {
		this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 2000 });
	}

	ngOnDestroy(): void {
		this.toastService.clear();
	}
}