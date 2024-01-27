import {
	Column,
	RelationId,
	ManyToOne,
	Unique,
	Index,
	JoinColumn
} from 'typeorm';
import { ITimeSlot, ITimeSlotMinute } from '@gauzy/contracts';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsDateString, IsString } from 'class-validator';
import { TenantOrganizationBaseEntity } from './../../core/entities/internal';
import { MultiORMEntity } from './../../core/decorators/entity';
import { TimeSlot } from './time-slot.entity';

@MultiORMEntity('time_slot_minute')
@Unique(['timeSlotId', 'datetime'])
export class TimeSlotMinute
	extends TenantOrganizationBaseEntity
	implements ITimeSlotMinute {

	@ApiProperty({ type: () => Number })
	@IsNumber()
	@Column({ default: 0 })
	keyboard?: number;

	@ApiProperty({ type: () => Number })
	@IsNumber()
	@Column({ default: 0 })
	mouse?: number;

	@ApiProperty({ type: () => 'timestamptz' })
	@IsDateString()
	@Column()
	datetime?: Date;

	/*
	|--------------------------------------------------------------------------
	| @ManyToOne
	|--------------------------------------------------------------------------
	*/

	@ApiProperty({ type: () => TimeSlot })
	@ManyToOne(() => TimeSlot, (timeSlot) => timeSlot.timeSlotMinutes, {
		onDelete: 'CASCADE'
	})
	@JoinColumn()
	timeSlot?: ITimeSlot;

	@ApiProperty({ type: () => String, readOnly: true })
	@RelationId((it: TimeSlotMinute) => it.timeSlot)
	@IsString()
	@Index()
	@Column()
	readonly timeSlotId?: string;
}
