import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpworkComponent } from './components/upwork/upwork.component';
import { UpworkRoutingModule } from './upwork-routing.module';
import {
	NbCardModule,
	NbInputModule,
	NbButtonModule,
	NbIconModule,
	NbTooltipModule,
	NbTabsetModule,
	NbRouteTabsetModule,
	NbToggleModule,
	NbDatepickerModule,
	NbCalendarKitModule,
	NbCheckboxModule,
	NbActionsModule,
	NbContextMenuModule
} from '@nebular/theme';
import { UpworkAuthorizeComponent } from './components/upwork-authorize/upwork-authorize.component';
import { I18nTranslateModule } from '@gauzy/ui-sdk/i18n';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { Angular2SmartTableModule } from 'angular2-smart-table';
import { TableComponentsModule } from '../../@shared/table-components/table-components.module';
import { ContractsComponent } from './components/contracts/contracts.component';
import { SyncDataSelectionComponent } from './components/sync-data-selection/sync-data-selection.component';
import { EmployeeSelectorsModule } from '../../@theme/components/header/selectors/employee/employee.module';
import { ReportsComponent } from './components/reports/reports.component';
import { BackNavigationModule } from '../../@shared/back-navigation/back-navigation.module';

@NgModule({
	declarations: [
		UpworkComponent,
		UpworkAuthorizeComponent,
		TransactionsComponent,
		ContractsComponent,
		SyncDataSelectionComponent,
		ReportsComponent
	],
	imports: [
		CommonModule,
		Angular2SmartTableModule,
		UpworkRoutingModule,
		NbCardModule,
		NbButtonModule,
		NbInputModule,
		FormsModule,
		NbToggleModule,
		ReactiveFormsModule,
		NbDatepickerModule,
		NbCalendarKitModule,
		NbTooltipModule,
		NbIconModule,
		NbTabsetModule,
		NbRouteTabsetModule,
		TableComponentsModule,
		EmployeeSelectorsModule,
		NbCheckboxModule,
		NbActionsModule,
		NbContextMenuModule,
		BackNavigationModule,
		I18nTranslateModule.forChild()
	]
})
export class UpworkModule {}
