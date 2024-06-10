import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly Root_URL = 'http://127.0.0.1:8000/api/v1/';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.Root_URL}login`, { email, password }).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUserRole(): string | null {
    return localStorage.getItem('role');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getUserRoles(): Observable<string[]> {
    const token = this.getToken();
    if (!token) {
      return new Observable<string[]>(observer => observer.next([]));
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<string[]>(this.Root_URL + 'user-roles', { headers });
  }

  logout(): Observable<any> {
    localStorage.removeItem('token');
    return this.http.get(this.Root_URL + 'logout');
  }
}
