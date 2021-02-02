import { Router } from '@angular/router';
import { UserResponse } from './../../models/user.interface';
import { AuthService } from '@auth/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject  } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  isAdmin = null;
  isLogged = false;
  private destroy$ = new Subject<any>();
  router: any;

  constructor(private authSvc: AuthService) {}

  ngOnInit(): void {  
    this.authSvc.user$
    .pipe(takeUntil(this.destroy$))
    .subscribe((user: UserResponse) => {
        this.isLogged = true;
        this.isAdmin = user?.role;
    })
  }

  ngOnDestroy (): void {  
    this.destroy$.next({});
    this.destroy$.complete();
  }

  onExit(): void {
    //this.authSvc.logout();
  }
}
