import { Component, OnInit } from '@angular/core';
import { FotosService } from '../../services/fotos.service';
import { HttpClientModule } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { isEmpty } from 'rxjs';
import { Notify } from 'notiflix';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, NgOptimizedImage, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  fotos: any[] = [];
  query: string = '';

  constructor(
    private service: FotosService
    ){

  }

  ngOnInit(): void {
    this.getImages()
  }

  getImages(){
    Loading.standard('Loading...');
    this.service.getImages()
    .subscribe((res: any) =>{
      this.fotos = res;
      Loading.remove();
      console.log(this.fotos);
    });
  }

  searchImages(){
    if(this.query == ''){
      Notify.warning('Ingrese una palabra');
    }else{
      Loading.standard('Loading...');
      this.service.searchImages(this.query)
      .subscribe((res: any) =>{
        this.fotos = res;
        Loading.remove();
        console.log(this.fotos);
      });
    }
  }
}
