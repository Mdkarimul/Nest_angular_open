import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import {
	IAmountOwedReport,
	IGetTimeLogReportInput,
	ITimeLogFilters,
	ReportGroupByFilter,
	ReportGroupFilterEnum
} from '@gauzy/contracts';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateService } from '@ngx-translate/core';
import { filter, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { DateRangePickerBuilderService, TimesheetService } from '@gauzy/ui-sdk/core';
import { Store, distinctUntilChange, isEmpty } from '@gauzy/ui-sdk/common';
import { BaseSelectorFilterComponent } from '../../timesheet/gauzy-filters/base-selector-filter/base-selector-filter.component';
import { TimeZoneService } from '../../../@shared/timesheet/gauzy-filters/timezone-filter';

@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'ga-amounts-owed-grid',
	templateUrl: './amounts-owed-grid.component.html',
	styleUrls: ['./amounts-owed-grid.component.scss']
})
export class AmountsOwedGridComponent extends BaseSelectorFilterComponent implements OnInit, AfterViewInit {
	public loading: boolean;
	public groupBy: ReportGroupByFilter = ReportGroupFilterEnum.date;
	public dailyData: IAmountOwedReport[];

	/**
	 *
	 */
	private _filters: ITimeLogFilters;
	get filters(): ITimeLogFilters {
		return this._filters;
	}
	@Input() set filters(value: ITimeLogFilters) {
		this._filters = value || {};
		this.subject$.next(true);
	}

	private payloads$: BehaviorSubject<ITimeLogFilters> = new BehaviorSubject(null);

	constructor(
		private readonly cd: ChangeDetectorRef,
		private readonly timesheetService: TimesheetService,
		public readonly translateService: TranslateService,
		protected readonly store: Store,
		protected readonly dateRangePickerBuilderService: DateRangePickerBuilderService,
		protected readonly timeZoneService: TimeZoneService
	) {
		super(store, translateService, dateRangePickerBuilderService, timeZoneService);
	}

	ngOnInit() {
		this.subject$
			.pipe(
				filter(() => !!this.organization),
				tap(() => this.prepareRequest()),
				untilDestroyed(this)
			)
			.subscribe();
		this.payloads$
			.pipe(
				distinctUntilChange(),
				filter((payloads: ITimeLogFilters) => !!payloads),
				tap(() => this.getAmountsOwed()),
				untilDestroyed(this)
			)
			.subscribe();
	}

	ngAfterViewInit() {
		this.cd.detectChanges();
	}

	/**
	 * Get header selectors request and Gauzy timesheet filters request.
	 */
	prepareRequest(): void {
		if (isEmpty(this.request) || isEmpty(this.filters)) {
			return;
		}

		// Create a request object of type IGetTimeLogReportInput
		const request: IGetTimeLogReportInput = {
			...this.getFilterRequest(this.request),
			groupBy: this.groupBy
		};

		// Notify subscribers about the filter change
		this.payloads$.next(request);
	}

	/**
	 * Updates Gauzy timesheet default filters and notifies subscribers about the change.
	 *
	 * @param filters - An object representing time log filters (ITimeLogFilters).
	 */
	filtersChange(filters: ITimeLogFilters): void {
		// Create a shallow copy of the filters and update the class property
		this.filters = { ...filters };

		// Notify subscribers about the filter change
		this.subject$.next(true);
	}

	/**
	 * Retrieves amounts owed reports, updates the 'dailyData' property, and handles loading state.
	 *
	 * @returns
	 */
	async getAmountsOwed(): Promise<void> {
		// Check if organization or request is not provided, resolve the Promise without further action
		if (!this.organization || isEmpty(this.request)) {
			return;
		}

		// Set the loading flag to true
		this.loading = true;

		try {
			// Get the current payloads from the observable
			const payloads = this.payloads$.getValue();

			// Fetch the owed amount report data from the timesheetService
			this.dailyData = await this.timesheetService.getOwedAmountReport(payloads);
		} catch (error) {
			// Log any errors during the process
			console.error('Error while retrieving amounts owed reports', error);
		} finally {
			// Set the loading flag to false, regardless of success or failure
			this.loading = false;
		}
	}
}
