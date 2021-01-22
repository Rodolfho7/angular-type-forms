import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/entities/usuario';
import { ShareDataService } from 'src/app/share-data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  usuario!: Usuario;

  constructor(private shareUser: ShareDataService) { }

  ngOnInit(): void {
    this.shareUser.usuarioAtualizado.subscribe((data: Usuario) => this.usuario = data);
  }

}
