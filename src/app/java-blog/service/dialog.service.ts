import {Injectable} from '@angular/core';
import {ComponentType} from '@angular/cdk/overlay';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) {

  }

  openDialogAndPassData<T>(component: ComponentType<T>, data: Object) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      data
    };

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    this.dialog.open(component, dialogConfig);
  }

  openDialogAndClosePrev<T, D>(component: ComponentType<T>, dialogRef: MatDialogRef<D>) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogRef.close();
    this.dialog.open(component, dialogConfig);
  }

  openDialogPassDataAndClosePrev<T, D>(component: ComponentType<T>, dialogRef: MatDialogRef<D>, data: Object) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      data
    };

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogRef.close();
    this.dialog.open(component, dialogConfig);
  }

  // add map with width and height
  openDialog<T>(component: ComponentType<T>) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = 'custom-dialog';

    this.dialog.open(component, dialogConfig);
  }
}
