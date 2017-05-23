import { NgModule } from "@angular/core";
import { Routes , RouterModule } from "@angular/router";

import { ModalTestComponent } from "./modaltest.component";
import { DxTestComponent } from "./dxtest.component";
import { CvsTestComponent } from "./cvstest.component";

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
                    title : 'Material Test'
                }
            },
            {
                path : 'dxtest',
                component : DxTestComponent,
                data : {
                    title : 'Dx Test'
                }
            },
            {
                path : 'cvstest',
                component : CvsTestComponent,
                data : {
                    title : 'Canvas Test'
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