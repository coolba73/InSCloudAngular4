import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';
import { DialogService } from "ng2-bootstrap-modal";
import { ConfirmComponent } from "../MyComponent/Modal/confirm.component";

@Component({
    templateUrl:'modaltest.component.html',
    styles:[`
            .example-container {
            width: 500px;
            height: 300px;
            border: 1px solid rgba(0, 0, 0, 0.5);
            }

            .example-sidenav-content {
            display: flex;
            height: 100%;
            align-items: center;
            justify-content: center;
            }

            .example-sidenav {
            padding: 20px;
            }
            `
    ]
    
})
export class ModalTestComponent{

    position = 'before';

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