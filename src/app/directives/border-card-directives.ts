import { Directive , ElementRef , HostListener , Input } from "@angular/core";

@Directive( {
    selector : '[pkmnBorderCard]'
}) 

export class BorderCardDirective {

    private initialColor:string ="#f5f5f5" ; 
    private enterColor:string ="#000" ; 
    private defaultColor:string ="#009688" ; 

    private defaultHeight:number = 200  ; 

    constructor (private el:ElementRef) {

        this.setBorder(this.initialColor) ; 
        this.setHeight(this.defaultHeight) ;

    }

    @HostListener('mouseenter') onMouseEnter() { 
        this.setBorder(this.enterColor);
    }

    
    @HostListener('mouseleave') onMouseLeave() { 
        this.setBorder(this.initialColor);
    }


    private setBorder(color:string) { 
        let border = 'solid 4px' + color ; 

       this.el.nativeElement.style.border = border ; 
    }

    private setHeight(height:number) {

        this.el.nativeElement.style.height = height +"px" ; 



    }
}