import {Component} from '@angular/core';
import {DraftService} from './services/draft-service/draft.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cube-drafter-ui';

  constructor(private draftService: DraftService) {
  }

  getDraft(draftId: string) {
    this.draftService.getDraft(draftId).subscribe(test => console.log(test));
  }
}
