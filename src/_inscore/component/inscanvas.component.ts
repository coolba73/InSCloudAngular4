import { Component, Input } from "@angular/core";

@Component({
    selector : 'ins-canvas',
    templateUrl : './inscanvas.component.html'
})
export class InSCanvasComponent{

    @Input() Height : number;

    constructor(){
        this.Height = 50;
    }
    
}