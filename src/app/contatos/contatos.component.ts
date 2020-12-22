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
      if(this.validarEmail(e.value) == false) {
        alert("Insira um e-mail válido.\n "
                +"Ex.: eduardosilva@hotmail.com");
      } else if(this.validarTelefone(t.value) == false) {
        alert("Formato de telefone inválido.\n "
                +"Ex.: (84) 9 8888-8888");
      } else {
        let novo = [n.value, e.value, t.value, a.value]
        this.contatos.push(novo)
        this.quantContatos = this.contatos.length;
      }
    } else {
      alert("Preencha todos os campos do formulário.");
    }
  }

  validarEmail(email){
    var regex = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/).test(email);
    return regex;
  }

  validarTelefone(telefone){
    var regex = new RegExp(/^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm).test(telefone);
    return regex;
  }
}