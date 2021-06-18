import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from './../../pages/auth/auth.service';


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
