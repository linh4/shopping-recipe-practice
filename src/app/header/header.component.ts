import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageServie } from "../shared/data-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private dataStorage: DataStorageServie) {}

  onSaveData() {
    this.dataStorage.storeRecipes().subscribe((response: Response) => {
      console.log(response)
    })
  }

  onFetchData() {
    this.dataStorage.getRecipes();
  }
}
