import { NgModule } from "@angular/core";
import { Routes , RouterModule } from "@angular/router";

import { ModalTestComponent } from "./modaltest.component";

const routes:Routes= [
    {
        path : '',
        data : {
            title : 'Test'
        },
        children:[
            {
                path : 'modaltest',
                component : ModalTestComponent,
                data : {
                    title : 'Modate Test'
                }
            }
        ]
    }
];

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class TestRoutingModule{}