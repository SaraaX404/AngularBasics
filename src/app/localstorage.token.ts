import {InjectionToken} from "@angular/core";


export const localstorageToken = new InjectionToken<any>('local storage', {
  providedIn:'root',
  factory(){
    return localStorage
  }
})
