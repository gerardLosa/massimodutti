import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'user-data-form',
  templateUrl: './user-data-form.component.html',
  styleUrls: ['./user-data-form.component.scss']
})
export class UserDataFormComponent {

  @Input() public formGroup: FormGroup;
  @Output() public userActionClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  public userAction() {
    this.userActionClicked.emit();
  }
}
