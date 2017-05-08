import { NgModule } from "@angular/core";
import { ModalTestComponent } from "./modaltest.component";
import { TestRoutingModule } from "./test.routing";
import { ModalModule } from 'ng2-bootstrap/modal';
import { BootstrapModalModule } from "ng2-bootstrap-modal";
import { ConfirmComponent } from "../MyComponent/Modal/confirm.component";

@NgModule({
    imports : [
        TestRoutingModule
        ,ModalModule.forRoot()
        ,BootstrapModalModule
        ],
    declarations:[
        ModalTestComponent
        ,ConfirmComponent
    ],
    entryComponents:[
        ConfirmComponent
    ]
})
export class TestModule{}


