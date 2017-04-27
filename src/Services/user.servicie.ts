import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";

@Injectable()
export class UserService{

    constructor(private http : Http){}


    registerUser(username:string, email:string, password:string) : string{
        
        

        var email_domain:string;
        var email_id : string;


        email_domain = email.split('@')[1];
        email_id = email.split('@')[0];

        var reqUrl:string = `http://localhost:62988/api/Users`;
        
        var params : string = `UserName=${username}&EMailDomain=${email_domain}&EMailID=${email_id}&Password=${password}`;

        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        let options = new RequestOptions({headers:headers});
        
        // this.http.post(reqUrl +'?'+ params,undefined ,options).subscribe(
        //     error => console.log('Error'),
        //     () => console.log("Servie Complete")
        // );

        this.http.post(reqUrl +'?'+ params,undefined).subscribe(
            error => console.log('Error'),
            () => console.log("Servie Complete")
        );

        return '';

        // return `username : ${username}  email : ${email}   password : ${password}`;


        //request url
        //http://collypagewebapi.azurewebsites.net/api/Users?UserName=testazure&EMail=test44%40test.com&Password=1234

        
    }
}