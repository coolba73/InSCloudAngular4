import { Component, Input, ViewChild, ElementRef , AfterViewInit , ViewEncapsulation } from "@angular/core";

@Component({
    selector : 'ins-canvas',
    templateUrl : './inscanvas.component.html',
    styles : [`
     ccsp-area {
        overflow: scroll;
    }
    `],
    encapsulation: ViewEncapsulation.None
})
export class InSCanvasComponent implements AfterViewInit{

    @Input() Height : number;
    Width : number = 10 ;

    canvasHeight : number=1000;
    canvasWidth : number=1000;

    @ViewChild("myCanvas") myCanvas: ElementRef;

    el:ElementRef;


    ctx: CanvasRenderingContext2D;
    cvs;

    constructor(el:ElementRef){
        this.el = el;
    }

    ngAfterViewInit(){

        this.cvs = this.myCanvas.nativeElement;
        this.ctx = this.cvs.getContext("2d");
        
        this.Width = this.el.nativeElement.parentElement.clientWidth;

        this.Draw();

        // console.log(this.el.nativeElement.parentElement);
        // console.log(this.el.nativeElement.parentElement.offsetWidth);
    }
  
    

    Draw(){
        this.ctx.beginPath();
        this.ctx.rect(30,30,100,50);
        this.ctx.stroke();
    }


    click(){
        //alert('click');
        this.Width = this.Width - 10; 
        this.Draw();
    }


    
}