import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserService{

    url = 'http://localhost:62988/api/User2';


    static UserID;
    static UserName;

    constructor(private http : Http){}


    registerUser(username:string, email:string, password:string) : boolean {
        
        
        let email_domain:string;
        let email_id : string;

        let re : string;

        email_domain = email.split('@')[1];
        email_id = email.split('@')[0];
        

        // 실행 되는 코드
        //===================================================================
        // var reqUrl:string = `http://localhost:62988/api/Users`;
        // var params : string = `UserName=${username}&EMailDomain=${email_domain}&EMailID=${email_id}&Password=${password}`;
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
        
        // 실행 되는 코드
        //===================================================================
        var reqUrl:string = 'http://localhost:62988/api/User2';

        let body = new URLSearchParams();
        body.append("UserName",username);
        body.append("EmailDomain",email_domain);
        body.append("EmailID",email_id);
        body.append("Password",password);

        let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

        let options = new RequestOptions({headers:headers, method:"post" });

        this.http.post(reqUrl, body.toString(), options).subscribe(
            data => console.log("res" + data),
            response => console.log(response),
            () => console.log('Service Complete')
        );
        //===================================================================


        //=======================================================================================
        // var reqUrl:string = `http://localhost:62988/api/User2`;

        // var user = JSON.stringify(
        //     {
        //     "UserName"   : "11",
        //     "EmailDomain": "22",
        //     "EmailID"    : "33",
        //     "Password"   : "44"
        //     }
        // );

        // var headers = new Headers();

        // headers.append('Content-Type', 'application/json');

        // let options = new RequestOptions({headers: headers });

        // console.log('Servie Call Start');

        // this.http.post(reqUrl, user, {headers: headers }).subscribe();
        
        //=======================================================================================


        return true;
        
    }//registerUser

    /*
    ############################################################################################################################

    createUser
    
    ############################################################################################################################
     */
    createUser(username:string, email:string, password:string){

        let email_domain:string;
        let email_id : string;

        let re : string;

        email_domain = email.split('@')[1];
        email_id = email.split('@')[0];

        var reqUrl:string = 'http://localhost:62988/api/User2';

        let body = new URLSearchParams();
        body.append("UserName",username);
        body.append("EmailDomain",email_domain);
        body.append("EmailID",email_id);
        body.append("Password",password);

        let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

        let options = new RequestOptions({headers:headers });

        return this.http.post(reqUrl, body.toString(), options).map((response:Response)=> response.json());

    }

    /*
    ############################################################################################################################

    AddUser
    
    ############################################################################################################################
     */
    AddUser(username:string, email:string, password:string){

        let email_domain:string;
        let email_id : string;

        email_domain = email.split('@')[1];
        email_id = email.split('@')[0];

        // let url = 'http://localhost:62988/api/User2';
        
        let body = JSON.stringify({
            UserName : username,
            EMailDomain : email_domain,
            EMailID : email_id,
            Password : password,
        });

        // let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({ headers: headers, method: "post" });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url, body, options).map(res=>res.json());

    }

    /*
    ############################################################################################################################
    
    LogIn
    
    ############################################################################################################################
    */
    LogIn(Email,Password){

        let email_domain:string;
        let email_id : string;

        email_domain = Email.split('@')[1];
        email_id = Email.split('@')[0];

        let body = new URLSearchParams();
        body.append("EmailID",email_id);
        body.append("EmailDomain",email_domain);
        body.append("Password",Password);


        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ search : body});

        return this.http.get(this.url, {search:body.toString()}).map( (res:Response)=>
            {
                //console.log(res.json());
                return res.json();
            }
        );
        
    }




}//class