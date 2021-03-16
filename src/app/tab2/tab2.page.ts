import { Component } from '@angular/core';
import { FotoService } from '../services/foto.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  angkaRandom = 0;
  angkaTebak = 0;
  statusTebakan = false;
  stringTebakan = "";

  constructor(public fotoService: FotoService) {}
  
  async ngOnInit() {
    this.angkaRandom = this.GetRandomInt(10);
    alert("HINT!!!\nAngka Random = " + this.angkaRandom);
    await this.fotoService.loadFotoProfil();
  }

  GantiFotoProfil(){
    this.fotoService.gantiFotoProfil();
  }

  GetRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  TebakAngka(){
    if(this.angkaTebak == this.angkaRandom){
      this.statusTebakan = true;
      this.stringTebakan = "Reload untuk bermain game ini lagi!";
    }
    else{
      this.stringTebakan = "Maaf, Tebakan Anda salah!";
    }
  }
}
