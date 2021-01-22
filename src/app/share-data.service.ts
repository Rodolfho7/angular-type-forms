import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from './entities/usuario';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  private usuario = new BehaviorSubject<Usuario>({
    nome: '',
    emprego: 'programador',
    idade: 0
  });
  
  public usuarioAtualizado = this.usuario.asObservable();

  constructor() { }

  public atualizarUsuario(data: Usuario): void {
    this.usuario.next(data);
  }
}
