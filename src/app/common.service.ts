import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class CommonService {
   



    constructor(private httpclient: HttpClient) {

    }
    
    getUsers(): Observable<any> {
        return this.httpclient.get('https://reqres.in/api/users?page=2');
    }
    getUsers1():Observable<any>{
        return this.httpclient.get("https://reqres.in/api/users?page=2");
    }
   
   Add(users){
        return this.httpclient.post("https://reqres.in/api/users",users);
         
     }   
}
