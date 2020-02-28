import { Component, OnDestroy } from '@angular/core';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { ShipsService } from 'src/app/main/ships/services/ships.service';

@AutoUnsubscribe()
@Component({
  selector: 'ships-list-page',
  templateUrl: './ships-list-page.component.html',
  styleUrls: ['./ships-list-page.component.scss']
})
export class ShipsListPageComponent implements OnDestroy {

  private fetchNext;
  public shipsList: Array<any> = new Array<any>();
  public hideMoreButton = true;

  constructor(private shipsService: ShipsService) {
    this.getInitialShipsList();
  }

  private getInitialShipsList() {
    this.shipsService.getShips()
      .subscribe(
        ships => {
          this.shipsList = ships.results;
          if (ships.next) {
            this.fetchNext = ships.next;
          }
        }
      );
  }

  public verMas() {
    this.shipsService.getShips(this.fetchNext)
      .subscribe(
        ships => {
          ships.results.forEach(ship => this.shipsList.push(ship)); //I do not understand why .concat does not work properly
          if (ships.next) {
            this.fetchNext = ships.next;
          } else {
            this.hideMoreButton = false;
          }
        }
      );
  }

  public ngOnDestroy(): void {
  }
}
