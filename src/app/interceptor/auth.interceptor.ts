import {
  HttpInterceptorFn,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError, of } from 'rxjs';
import { Router } from '@angular/router';



export const authInterceptor: HttpInterceptorFn = (req, next) => {
  //const tokenStore = inject(TokenStoreService);
  const router = inject(Router);

  //const accessToken = tokenStore.getAccessToken();
  const accessToken: string = '';
  //const refreshToken = tokenStore.getRefreshToken();
  const refreshToken: string = '';

  let cloned = req;
  if (accessToken) {
    cloned = req.clone({
      setHeaders: { Authorization: `Bearer ${accessToken}` },
    });
  }

  return next(cloned).pipe(
    catchError((error: HttpErrorResponse) => {
        
        // if (error.status === 401 && refreshToken && !req.url.includes('auth/refresh')) {
        //     return tokenStore.refreshToken().pipe(
        //     switchMap((tokens) => {
        //         const retryReq = req.clone({
        //         setHeaders: { Authorization: `Bearer ${tokens.accessToken}` },
        //         });
        //         return next(retryReq);
        //     }),
        //     catchError(() => {
        //         router.navigate(['/signin']);
        //         return throwError(() => error);
        //     })
        //     );
        // }

        if (error.status === 403) router.navigate(['/error/403']);
        if (error.status === 404) console.warn('Ressource indisponible');

        return throwError(() => error);
    })
  );
};
