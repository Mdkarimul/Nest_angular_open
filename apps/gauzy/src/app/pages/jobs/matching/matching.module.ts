import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
	NbIconModule,
	NbSpinnerModule,
	NbPopoverModule,
	NbCardModule,
	NbInputModule,
	NbSelectModule,
	NbButtonModule,
	NbCheckboxModule,
	NbRadioModule,
	NbTooltipModule
} from '@nebular/theme';
import { NgSelectModule } from '@ng-select/ng-select';
import { MomentModule } from 'ngx-moment';
import { I18nTranslateModule } from '@gauzy/ui-sdk/i18n';
import { DialogsModule } from '@gauzy/ui-sdk/shared';
import { MatchingRoutingModule } from './matching-routing.module';
import { MatchingComponent } from './matching/matching.component';
import { SharedModule } from '../../../@shared/shared.module';
import { EmployeeMultiSelectModule } from '../../../@shared/employee/employee-multi-select/employee-multi-select.module';

@NgModule({
	declarations: [MatchingComponent],
	imports: [
		CommonModule,
		MatchingRoutingModule,
		I18nTranslateModule.forChild(),
		SharedModule,
		NbIconModule,
		NbSpinnerModule,
		MomentModule,
		NbPopoverModule,
		NbCardModule,
		NbInputModule,
		FormsModule,
		ReactiveFormsModule,
		NbSelectModule,
		NbButtonModule,
		EmployeeMultiSelectModule,
		NgSelectModule,
		NbCheckboxModule,
		DialogsModule,
		NbRadioModule,
		NbTooltipModule
	]
})
export class MatchingModule {}
