import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import axios from 'axios';

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
    customCounterFormatter(inputlength: number, maxlength: number) {
        return `${maxlength - inputlength} characters remaining`;
    }

    public id: any = "";
    public nama: any = "";
    public jenis_kelamin: any = "";
    public nomor: any = "";
    public email: any = "";
    public asal_sekolah: any = "";
    public prodi: any = "";
    public jenjang: any = "";
    public kelas: any = "";
    public info: any = "";
    public status: any = "";

    constructor(
        public toastCtrl: ToastController,

    ) { }

    async addData() {
        if (!this.nama || !this.jenis_kelamin || !this.nomor || !this.email || !this.asal_sekolah || !this.prodi || !this.jenjang || !this.kelas || !this.info || !this.status) {
            const toast = await this.toastCtrl.create({
                message: 'Semua data harus diisi!',
                duration: 2000,
                color: 'danger'
            });
            toast.present();
            return;
        }

        const formData = new FormData();
        formData.append('id', this.id);
        formData.append('nama', this.nama);
        formData.append('jenis_kelamin', this.jenis_kelamin);
        formData.append('nomor', this.nomor);
        formData.append('email', this.email);
        formData.append('asal_sekolah', this.asal_sekolah);
        formData.append('prodi', this.prodi);
        formData.append('jenjang', this.jenjang);
        formData.append('kelas', this.kelas);
        formData.append('info', this.info);
        formData.append('status', this.status);
        console.log(formData);

        try {
            const res = await axios.post('http://praktikum-cpanel-unbin.com/api_ppp/post_data.php', formData);
            console.log(res.data);

            if (res.data.error == false) {
                const toast = await this.toastCtrl.create({
                    message: 'Data berhasil ditambahkan!',
                    duration: 2000,
                    color: 'success'
                });
                toast.present();
            } else {
                const toast = await this.toastCtrl.create({
                    message: 'Data gagal ditambahkan!',
                    duration: 2000,
                    color: 'danger'
                });
                toast.present();
            }

        } catch (err) {
            console.log(err);
        }
    }
}