import { Column, ManyToMany, JoinTable } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';
import { IEmployeeLevel, ITag } from '@gauzy/contracts';
import { Tag, TenantOrganizationBaseEntity } from '../core/entities/internal';
import { MultiORMEntity } from './../core/decorators/entity';

@MultiORMEntity({ name: 'employee_level' })
export class EmployeeLevel extends TenantOrganizationBaseEntity implements IEmployeeLevel {

	@ApiProperty({ type: () => String })
	@IsString()
	@IsNotEmpty()
	@Column()
	level: string;

	/*
	|--------------------------------------------------------------------------
	| @ManyToMany
	|--------------------------------------------------------------------------
	*/

	/**
	 * Tag
	 */
	@ApiPropertyOptional({ type: () => Tag, isArray: true })
	@ManyToMany(() => Tag, (tag) => tag.employeeLevels, {
		onUpdate: 'CASCADE',
		onDelete: 'CASCADE'
	})
	@JoinTable({
		name: 'tag_employee_level'
	})
	tags?: ITag[];
}
