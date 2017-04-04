import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: 'singleurl.component.html',
  encapsulation: ViewEncapsulation.Emulated
})
export class SingleurlComponent {


    txtSource      : HTMLInputElement;
    txtMedium      : HTMLInputElement;
    txtCampaignName: HTMLInputElement;
    txtLandingUrl  : HTMLInputElement;
    txtResult      : HTMLInputElement;

    ngOnInit()
    {
        this.txtSource       = <HTMLInputElement>document.getElementById("txtSource");
        this.txtMedium       = <HTMLInputElement>document.getElementById("txtMedium");
        this.txtCampaignName = <HTMLInputElement>document.getElementById("txtCampaignName");
        this.txtLandingUrl   = <HTMLInputElement>document.getElementById("txtLandingUrl");
        this.txtResult       = <HTMLInputElement>document.getElementById("txtResult");


        // this.txtSource.value       = "facebook";
        // this.txtMedium.value       = "cpc";
        // this.txtCampaignName.value = "20170221_포인트로보게시물";
        // this.txtLandingUrl.value   = "http: //insightcampus.co.kr/shop/r_datamining2/";
        
    }

  constructor() { }

  public btnMake_Click() 
  {
    var re = this.txtLandingUrl.value
            + '?utm_source='
            + this.txtSource.value
            + '&utm_medium='
            + this.txtMedium.value
            + '&utm_campaign='
            + encodeURIComponent(this.txtCampaignName.value);

      this.txtResult.value = re;
  }

  public btnCopy_Click()
  {

        this.txtResult.select();
        document.execCommand('copy');
       
    //   // Get the modal
    //   var modal = document.getElementById('myModal');

    //   // Get the <span> element that closes the modal
    //   var span = <HTMLInputElement>document.getElementsByClassName("close")[0];

    //   // When the user clicks on <span> (x), close the modal
    //   span.onclick = function() {
    //       modal.style.display = "none";
    //   }

    //   // When the user clicks anywhere outside of the modal, close it
    //   window.onclick = function(event) {
    //       if (event.target == modal) {
    //           modal.style.display = "none";
    //       }
    //   }

    //   setTimeout(function(){modal.style.display = "none"},1500);
    //   modal.style.display = "block";

  }

}//class
