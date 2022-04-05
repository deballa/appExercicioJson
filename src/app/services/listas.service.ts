import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListasService {
  
  //Métodos
  public obterAlunos() {
    return [
      { rm: 202101, nome: "Abraão Cotrim", idade: "54 anos", user: "user9.png" },
      { rm: 202102, nome: "Amanda Freiria", idade: "32 anos", user: "user2.png" },
      { rm: 202103, nome: "Daniela Marañón", idade: "25 anos", user: "user10.png" },
      { rm: 202104, nome: "Ilma Damazio", idade: "19 anos", user: "user7.png" },
      { rm: 202105, nome: "João Pedro Mourato", idade: "18 anos", user: "user1.png" },
      { rm: 202106, nome: "Matheus Telinhos", idade: "21 anos", user: "user5.png" },
      { rm: 202107, nome: "Neuza Castella", idade: "58 anos", user: "user6.png" },
      { rm: 202108, nome: "Ricardo Ítalo Hirbs", idade: "32 anos", user: "user3.png" }
    ];
  }

  public obterCarros() {
    return [
      { marca: "Nissan", modelo: "Pathfinder", cor: "verde", anofabricacao: "2000", foto: "pathfinder.jpg" },
      { marca: "Lada", modelo: "Samara", cor: "preto", anofabricacao: "1991", foto: "lada.jpg" },
      { marca: "Ford", modelo: "Mustang", cor: "vermelho", anofabricacao: "1995", foto: "mustang.jpg" },
      { marca: "Ford", modelo: "EcoSport", cor: "prata", anofabricacao: "2013", foto: "ecosport.jpg" },
      { marca: "Citroen", modelo: "Xantia ", cor: "branco", anofabricacao: "1994", foto: "xandia.jpg" },
      { marca: "Chevrolet", modelo: "Astra ", cor: "dourado", anofabricacao: "2008", foto: "astra.jpg" },
      { marca: "Renault", modelo: "Logan ", cor: "preto", anofabricacao: "2018", foto: "logan.jpg" },
      { marca: "Renault", modelo: "Duster ", cor: "branco", anofabricacao: "2020", foto: "duster.jpg" }
    ];
  }

}
