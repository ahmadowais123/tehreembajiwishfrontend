import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL: string = 'http://www.owaisahmedkhan.com:8080/shadi'

  constructor(private httpClient: HttpClient) { }

  public getHello() {
    return this.httpClient.get(`${this.SERVER_URL}/hello`, {responseType: 'text'})
  }

  public authenticate(username, password) {
    let data = {
      username: username,
      password: password
    }
    console.log(data)

    return this.httpClient.post(`${this.SERVER_URL}/check`, data, {responseType: 'text'})
  }
}
