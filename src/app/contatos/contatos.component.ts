import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {
  private novoContato: string;
  private novoEmail: string;
  private novoTelefone: string;
  private novoAniversario: string;
  contatos: any[];
  quantContatos: number;
  iconURL: string;

  constructor() {
    this.contatos = [];
    this.novoContato = "";
    this.novoEmail = "";
    this.novoTelefone = "";
    this.novoAniversario = "";
  }

  get nome(): string {
    return this.novoContato;
  }

  set nome(n: string) {
    this.novoContato = n;
  }

  get email(): string {
    return this.novoEmail;
  }

  set email(n: string) {
    this.novoEmail = n;
  }

  get telefone(): string {
    return this.novoTelefone;
  }

  set telefone(n: string) {
    this.novoTelefone = n;
  }

  get aniversario(): string {
    return this.novoAniversario;
  }

  set aniversario(n: string) {
    this.novoAniversario = n;
  }

  ngOnInit() {
    this.contatos = [];
    this.quantContatos = this.contatos.length;
  }

  adicionar(n: HTMLInputElement , e: HTMLInputElement, t: HTMLInputElement, a: HTMLInputElement): void {
    if (n.value != "" && e.value != "" && t.value != "" && a.value != "") {
      let novo = [n.value, e.value, t.value, a.value]
      this.contatos.push(novo)
      this.quantContatos = this.contatos.length;
    }
  }

}