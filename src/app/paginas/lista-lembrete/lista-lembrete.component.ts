import { ErrorMsgComponent } from './../../compartilhado/error-msg/error-msg.component';
import { LembreteService } from './../../services/lembrete.service';
import { Lembrete } from './../../interfaces/lembrete';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lista-lembrete',
  templateUrl: './lista-lembrete.component.html',
  styleUrls: ['./lista-lembrete.component.css']
})
export class ListaLembreteComponent implements OnInit {
	public lembretes: Lembrete[];
	@ViewChild(ErrorMsgComponent, {static: true}) errorMsgComponent: ErrorMsgComponent;

  constructor(private lembreteService: LembreteService) { }

  ngOnInit() {
  }

}
