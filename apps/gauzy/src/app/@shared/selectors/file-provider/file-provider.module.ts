import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NbSelectModule } from '@nebular/theme';
import { FileProviderComponent } from './file-provider.component';
import { I18nTranslateModule } from '@gauzy/ui-sdk/i18n';

@NgModule({
	declarations: [FileProviderComponent],
	exports: [FileProviderComponent],
	imports: [CommonModule, FormsModule, NbSelectModule, I18nTranslateModule.forChild()]
})
export class FileProviderModule {}
