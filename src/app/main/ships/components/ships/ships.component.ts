import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {
  @Input() public ship;
  public shipId = '';
  public showError;

  constructor() { }

  public ngOnInit() {
    this.shipId = this.getStarshipId();
  }

  private getStarshipId(): string {
    if (this.ship.url) {
      return this.ship.url.split('/')
        .filter(item => item !== '')
        .slice(-1)[0];
    }
    return '';
  }

  public errorHandler(event) {
    console.log(event);
    event.target.src = '/assets/img/image_not_available.png';
  }
}
