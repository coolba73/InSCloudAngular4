import { NgModule } from "@angular/core";

import { ModalTestComponent } from "./modaltest.component";

import { TestRoutingModule } from "./test.routing";

@NgModule({
    imports : [TestRoutingModule],
    declarations:[
        ModalTestComponent
    ]
})
export class TestModule{}


