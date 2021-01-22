import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../entities/usuario';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  usuario!: Usuario;

  usuarioCadastro!: FormGroup;

  constructor(private shareUser: ShareDataService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.shareUser.usuarioAtualizado.subscribe((data: Usuario) => this.usuario = data);

    this.usuarioCadastro = this.fb.group({
      nome: ['', [
        Validators.required
      ]],
      emprego: ['', [
        Validators.required
      ]],
      idade: [0, [
        Validators.required,
        Validators.min(18)
      ]]
    });
  }

  atualizar(): void {
    this.shareUser.atualizarUsuario(this.usuarioCadastro.value);
  }

}
