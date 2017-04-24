import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

@Injectable()
export class UserService{
    registerUser(username:string, email:string, password:string) : string{
        return `username : ${username}  email : ${email}   password : ${password}`;

        

    }
}