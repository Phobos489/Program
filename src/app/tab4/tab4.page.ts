import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import axios from 'axios';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  handleRefresh(event: any) {
    setTimeout(() => {
      event.target.complete();
      this.getData()
    }, 2000);
  };

  onSearchInput(event: any) {
    setTimeout(() => {
      this.filterData();
    }, 100);
  }

  resetData() {
    if (!this.searchTerm.trim()) {
    }
  }

  public mahasiswaData: any = [];
  originalMahasiswaData: any = [];

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

  public searchTerm: string = '';


  constructor(
    public modalCtrl: ModalController,
  ) {
    this.getData();
  }

  filterData() {
    if (this.searchTerm.trim() !== '') {
      this.mahasiswaData = this.originalMahasiswaData.filter((item: any) => {
        return (
          item.id.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          item.nama.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          item.prodi.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      });
    } else {
      this.mahasiswaData = [...this.originalMahasiswaData];
    }
  }

  async getData() {
    try {
      const res = await axios.get('http://praktikum-cpanel-unbin.com/api_ppp/get_data_mahasiswa.php');
      this.mahasiswaData = res.data.result;

      this.mahasiswaData.sort((a: any, b: any) => {
        const idA = parseInt(a.id, 10);
        const idB = parseInt(b.id, 10);
        return idA - idB;
      });

      this.originalMahasiswaData = [...this.mahasiswaData];
      this.filterData();
      console.log(this.mahasiswaData);
    } catch (err) {
      console.log(err);
    }
  }
  ngOnInit() {
  }

}
