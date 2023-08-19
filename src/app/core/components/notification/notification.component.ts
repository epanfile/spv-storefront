import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { NOTIFICATION_OPTIONS, NotificationOptions } from '../../providers/notification/notification-types';

@Component({
  selector: 'vsf-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent {
  close = new Subject();

  constructor(@Inject(NOTIFICATION_OPTIONS) public options: NotificationOptions) {}
}
