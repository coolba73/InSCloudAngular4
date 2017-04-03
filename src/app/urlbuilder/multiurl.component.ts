import { Component } from '@angular/core';

@Component({
  templateUrl: 'multiurl.component.html'
})
export class MultiUrlComponent {

    constructor() { }

    txtSource      : HTMLInputElement;
    txtResult      : HTMLInputElement;

    ngOnInit()
    {
        this.txtSource       = <HTMLInputElement>document.getElementById("txtSource");
        this.txtResult       = <HTMLInputElement>document.getElementById("txtResult");
    }


    public btnMake_Click() 
    {
      var lines = this.txtSource.value.split('\n');
          var re='';
          var total='';

          var source;
          var medium;
          var compaign;
          var landingUrl;
        

          for (var i = 0; i < lines.length; i++)
          {
              //re += i + " : " + lines[i] + '\n';

              var tabs = lines[i].split('\t');

              if (tabs.length == 4)
              {
                  for (var j = 0; j < tabs.length; j++) {

                      source = tabs[0];
                      medium = tabs[1];
                      compaign = tabs[2];
                      landingUrl = tabs[3];

                      re = landingUrl
                          + '?utm_source='
                          + source
                          + '&utm_medium='
                          + medium
                          + '&utm_campaign='
                          + encodeURIComponent(compaign);

                  }

                  total += re + '\n';

              }

          }

          this.txtResult.value = total;
    }

    public btnCopy_Click()
    {
          this.txtResult.select();
          document.execCommand('copy');
    }
    
}//class