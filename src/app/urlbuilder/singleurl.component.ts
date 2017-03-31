import { Component } from '@angular/core';

@Component({
  templateUrl: 'singleurl.component.html'
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


        this.txtSource.value       = "facebook";
        this.txtMedium.value       = "cpc";
        this.txtCampaignName.value = "20170221_포인트로보게시물";
        this.txtLandingUrl.value   = "http: //insightcampus.co.kr/shop/r_datamining2/";
        
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

}//class
