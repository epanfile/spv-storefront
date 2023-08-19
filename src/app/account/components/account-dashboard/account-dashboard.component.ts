import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { GetAccountOverviewQuery } from '../../../common/generated-types';
import { notNullOrUndefined } from '../../../common/utils/not-null-or-undefined';
import { DataService } from '../../../core/providers/data/data.service';
import { GET_ACCOUNT_OVERVIEW } from './account-dashboard.graphql';

@Component({
  selector: 'vsf-account-dashboard',
  templateUrl: './account-dashboard.component.html',
  // styleUrls: ['./account-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountDashboardComponent implements OnInit {
  activeCustomer$: Observable<GetAccountOverviewQuery['activeCustomer']>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.activeCustomer$ = this.dataService.query<GetAccountOverviewQuery>(GET_ACCOUNT_OVERVIEW).pipe(
      map((data) => data.activeCustomer),
      filter(notNullOrUndefined)
    );
  }
}
