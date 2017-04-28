import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserService{

    constructor(private http : Http){}


    registerUser(username:string, email:string, password:string) : string{
        
        
        var email_domain:string;
        var email_id : string;

        var re : string;

        email_domain = email.split('@')[1];
        email_id = email.split('@')[0];

        
        

        // 실행 되는 코드
        //===================================================================
        // var reqUrl:string = `http://localhost:62988/api/Users`;
        //var params : string = `UserName=${username}&EMailDomain=${email_domain}&EMailID=${email_id}&Password=${password}`;
        // this.http.post(reqUrl +'?'+ params,undefined).catch(res=>{
            
        //     console.log("catch : " + res);
        //     return Observable.throw('err');
        // })
        // .subscribe(
        //     error => console.log('Error'),
        //     respose => console.log('Respose : ' + respose.status),
        //     () => console.log("Servie Complete")
        // );
        //===================================================================
        

        var reqUrl:string = `http://localhost:62988/api/User2`;

        let body = new URLSearchParams();
        body.append("UserName",username);
        body.append("EmailDomain",email_domain);
        body.append("EmailID",email_id);
        body.append("Password",password);



        // let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
        let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

        let options = new RequestOptions({headers:headers, method:"post" });

        this.http.post(reqUrl, body.toString(), options).subscribe(
            data => console.log("res" + data),
            response => console.log(response),
            () => console.log('Service Complete')
        );

        return '';
        
    }
}