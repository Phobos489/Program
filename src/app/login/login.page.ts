import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: any = "";
  password: any = "";

  constructor(private router: Router, public toastCtrl: ToastController,) { }

  ngOnInit() {
  }

  async login() {
    if (this.username == "" || this.password == "") {
      const toast = await this.toastCtrl.create({
        message: 'Data belum terisi!',
        duration: 2000,
        color: 'danger'
      });
      toast.present();
      console.log(this.username);
      console.log(this.password);
    } else {
      this.router.navigate(['/tabs/tab1'])
      console.log('Login berhasil!');
      console.log(this.username);
      console.log(this.password);
    }
  }

}
