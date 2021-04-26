import { UserResponse } from './../../models/user.interface';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from '@auth/auth.service';
import { takeUntil } from 'rxjs/operators';
import { UtilsService } from '../../services/utils.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy  {
  [x: string]: any;
  isAdmin = null;
  isLogged = false;
  role = null;

  
  private destroy$ = new Subject<any>();

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(private authSvc: AuthService,private utilsSvc: UtilsService) {}


  ngOnInit(): void {
    this.authSvc.user$
      .pipe(takeUntil(this.destroy$))
      .subscribe((user: UserResponse) => {
          this.isLogged = true;
          this.isAdmin = user?.role;
          this.role = user?.role;
      })
    }
      

  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.complete();
  }

  onToggleSidenav(): void {
    this.toggleSidenav.emit();
  }

  onLogout(): void {
    this.authSvc.logout();
    this.utilsSvc.openSidebar(false);
   }
}
