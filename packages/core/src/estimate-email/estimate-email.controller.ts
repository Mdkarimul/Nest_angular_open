import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { Public } from '@gauzy/common';
import { EstimateEmail } from './estimate-email.entity';
import { EstimateEmailService } from './estimate-email.service';
import { CrudController } from './../core/crud';
import { ParseJsonPipe } from './../shared/pipes';

@ApiTags('EstimateEmail')
@Controller()
export class EstimateEmailController extends CrudController<EstimateEmail> {
	constructor(private estimateEmailService: EstimateEmailService) {
		super(estimateEmailService);
	}

	@Get('validate')
	@Public()
	async validateEstimateEmail(
		@Query('data', ParseJsonPipe) data: any
	): Promise<EstimateEmail> {
		const {
			relations,
			findInput: { email, token }
		} = data;
		if (!email && !token) {
			throw new BadRequestException('Email & Token Mandatory');
		}
		return this.estimateEmailService.validate(relations, email, token);
	}
}
