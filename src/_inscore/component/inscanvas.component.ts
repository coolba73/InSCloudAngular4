import { Component, Input, ViewChild, ElementRef , AfterViewInit , ViewEncapsulation } from "@angular/core";

@Component({
    selector : 'ins-canvas',
    templateUrl : './inscanvas.component.html',
    encapsulation: ViewEncapsulation.None
})
export class InSCanvasComponent implements AfterViewInit{

    // @Input() Height : number;

    @ViewChild("myCanvas") myCanvas: ElementRef;


    ctx: CanvasRenderingContext2D;

    constructor(){
        this.Height = 50;
    }

    ngAfterViewInit(){
        let cvs = this.myCanvas.nativeElement;
        this.ctx = cvs.getContext("2d");
        this.Height = this.Height;
        this.Draw();
    }

    @Input() set Height(newHeight:number){
        //this.cvs.Height = newHeight;
        let cvs = this.myCanvas.nativeElement;

        // myCanvas.Height = newHeight;
        // cvs.Height = newHeight;
        console.log(newHeight);
    }
    get Height(){
        //return this.cvs.Height;
        return 0;
    }

    Draw(){

        this.ctx.beginPath();
        this.ctx.rect(0,0,30,10);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.rect(0,0,30,10);
        this.ctx.stroke();
    }



    
}