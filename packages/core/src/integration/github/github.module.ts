import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CqrsModule } from '@nestjs/cqrs';
import { ProbotModule } from '@gauzy/integration-github';
import { TenantModule } from './../../tenant/tenant.module';
import { UserModule } from './../../user/user.module';
import { GithubService } from './github.service';
import { GitHubController } from './github.controller';
import { GitHubEventsController } from './github.events.controller';

@Module({
	imports: [
		HttpModule,
		TenantModule,
		UserModule,
		ProbotModule,
		CqrsModule
	],
	controllers: [
		GitHubController,
		GitHubEventsController
	],
	providers: [GithubService],
	exports: [GithubService],
})
export class GithubModule { }
