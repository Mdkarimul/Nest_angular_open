import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
	NbButtonModule,
	NbCardModule,
	NbDialogModule,
	NbIconModule,
	NbInputModule,
	NbTooltipModule,
	NbSelectModule,
	NbSpinnerModule
} from '@nebular/theme';
import { NgSelectModule } from '@ng-select/ng-select';
import { ThemeModule } from '../../@theme/theme.module';
import { SharedModule } from '../../@shared/shared.module';
import { FileUploaderModule } from '../../@shared/file-uploader-input/file-uploader-input.module';
import { EntityWithMembersModule } from '../../@shared/entity-with-members-card/entity-with-members-card.module';
import { TagsColorInputModule } from '../../@shared/tags/tags-color-input/tags-color-input.module';
import { EmployeeMultiSelectModule } from '../../@shared/employee/employee-multi-select/employee-multi-select.module';
import { DepartmentsComponent } from './departments.component';
import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsMutationComponent } from './departments-mutation/departments-mutation.component';
import { OrganizationDepartmentsService } from '@gauzy/ui-sdk/core';
import { CardGridModule } from '../../@shared/card-grid/card-grid.module';
import { Angular2SmartTableModule } from 'angular2-smart-table';
import { I18nTranslateModule } from '@gauzy/ui-sdk/i18n';
import { HeaderTitleModule } from '../../@shared/components/header-title/header-title.module';
import { PaginationV2Module } from '../../@shared/pagination/pagination-v2/pagination-v2.module';
import { GauzyButtonActionModule } from '../../@shared/gauzy-button-action/gauzy-button-action.module';
import { TableComponentsModule } from '../../@shared/table-components/table-components.module';

const COMPONENTS = [DepartmentsComponent, DepartmentsMutationComponent];

@NgModule({
	imports: [
		SharedModule,
		ThemeModule,
		DepartmentsRoutingModule,
		NbCardModule,
		FormsModule,
		NbDialogModule,
		ReactiveFormsModule,
		NbButtonModule,
		NbInputModule,
		NbSelectModule,
		NbIconModule,
		NbDialogModule.forChild(),
		NbTooltipModule,
		FileUploaderModule,
		NgSelectModule,
		CardGridModule,
		Angular2SmartTableModule,
		EntityWithMembersModule,
		TagsColorInputModule,
		EmployeeMultiSelectModule,
		NbSpinnerModule,
		I18nTranslateModule.forChild(),
		HeaderTitleModule,
		PaginationV2Module,
		GauzyButtonActionModule,
		TableComponentsModule
	],
	declarations: [...COMPONENTS],
	providers: [OrganizationDepartmentsService]
})
export class DepartmentsModule {}
