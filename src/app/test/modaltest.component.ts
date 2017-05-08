import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';
import { DialogService } from "ng2-bootstrap-modal";
import { ConfirmComponent } from "../MyComponent/Modal/confirm.component";

@Component({
    templateUrl:'modaltest.component.html'
})
export class ModalTestComponent{

    constructor(private dialogService:DialogService){}

    showConfirm()
    {
        let disposable = this.dialogService.addDialog(ConfirmComponent,{
            title:'test',
            message:'test'
        }).subscribe((isConfirmed) =>{
            if (isConfirmed)
            {
                alert('accept');
            }
            else
            {
                alert('declined');
            }
        });
    }
}//class