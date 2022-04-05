import { Component, OnInit } from '@angular/core';
import { ListasService } from '../services/listas.service';

@Component({
  selector: 'app-exercicio1',
  templateUrl: './exercicio1.page.html',
  styleUrls: ['./exercicio1.page.scss'],
})
export class Exercicio1Page implements OnInit {

  private listas;

  constructor(private listasService: ListasService) { }

  ngOnInit() {
    this.obterAlunos();
  }

  private obterAlunos() {
    this.listas = this.listasService.obterAlunos();
  }

}
