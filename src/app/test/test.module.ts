import { NgModule } from "@angular/core";
import { ModalTestComponent } from "./modaltest.component";
import { TestRoutingModule } from "./test.routing";
import { ModalModule } from 'ng2-bootstrap/modal';
import { BootstrapModalModule } from "ng2-bootstrap-modal";
import { ConfirmComponent } from "../MyComponent/Modal/confirm.component";
import { DxTestComponent } from "./dxtest.component";
import { DevExtremeModule } from "devextreme-angular";

import { 
    MdTabsModule, 
    MdCommonModule, 
    MdInputModule, 
    MdDatepickerModule, 
    MdNativeDateModule, 
    MdTooltipModule,
    MdSidenavModule
} from "@angular/material";

@NgModule({
    imports : [
        TestRoutingModule
        ,ModalModule.forRoot()
        ,BootstrapModalModule
        ,MdTabsModule
        ,MdInputModule
        ,MdDatepickerModule
        ,MdNativeDateModule
        ,MdTooltipModule
        ,MdSidenavModule
        ,DevExtremeModule
        ],
    declarations:[
        ModalTestComponent
        ,ConfirmComponent
        ,DxTestComponent
    ],
    entryComponents:[
        ConfirmComponent
    ]
})
export class TestModule{}


