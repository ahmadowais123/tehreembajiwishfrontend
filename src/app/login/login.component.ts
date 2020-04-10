import { Component, OnInit, Output } from '@angular/core';
import { ApiService } from '../api.service'
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() authenticated: EventEmitter<any> = new EventEmitter()

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

  }

  username: string = ''
  password: string = ''
  error: boolean = false

  authenticate() {
    console.log(this.username)
    console.log(this.password)
    this.apiService.authenticate(this.username, this.password).subscribe((data: any) => {
      this.error = false
      this.authenticated.emit(null)
      console.log(data)
    },
    (error) => {
      this.error = true
      console.log('Unauthorized')
    })
  }

}
