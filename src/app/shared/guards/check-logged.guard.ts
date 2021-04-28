import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthService } from './../../pages/auth/auth.service';
import { take, map } from 'rxjs/operators';
import { UserResponse } from './../models/user.interface';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class CheckLoggedGuard implements CanActivate {
  constructor(private authSvc: AuthService,private router: Router) {}

  canActivate() {
    if (!this.authSvc.isLogged)
    {
        //console.log('NO estás logeado');
        this.router.navigate(['/']);
        return false;
    }
    else{
      //console.log('ESTÁS logeado');
      return true;
    }
 
  }
  
}
