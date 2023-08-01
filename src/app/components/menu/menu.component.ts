import { Component } from '@angular/core';
import {
  MatBottomSheet,
} from '@angular/material/bottom-sheet';
import {
  ItemDetailComponent,
} from '../item-detail/item-detail.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(ItemDetailComponent);
  }
}
