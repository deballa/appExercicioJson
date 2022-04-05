import { Component, OnInit } from '@angular/core';
import { ListasService } from '../services/listas.service';

@Component({
  selector: 'app-exercicio2',
  templateUrl: './exercicio2.page.html',
  styleUrls: ['./exercicio2.page.scss'],
})
export class Exercicio2Page implements OnInit {

  private listas;

  constructor(private listasService: ListasService) { }

  ngOnInit() {
    this.obterCarros();
  }

  private obterCarros() {
    this.listas = this.listasService.obterCarros();
  }

}
