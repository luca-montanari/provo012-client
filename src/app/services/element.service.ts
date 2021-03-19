import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { CreateElement } from '../models/create-element.dto';

@Injectable({
    providedIn: 'root'
})
export class ElementService {

    constructor(private http: HttpClient) { }

    create(createElement: CreateElement) {        
        console.log('ElementService', 'create', createElement);
        return this.http.post('http://localhost:3000/elements/create', createElement);
    }

}
