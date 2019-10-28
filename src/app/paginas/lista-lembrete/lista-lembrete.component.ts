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
		this.getListaLembretes();
	}
	
	/**
	 * Nesse método o lembreteService retorna um Observable e isso faz
	 * com que possamos utilizar o método subscribe que nada mais é
	 * uma validação se irá dar certo ou não. Passamos no parâmetro dela
	 * um array que irá pegar da api e dentro do callback atribuimos
	 */
	getListaLembretes() {
		this.lembreteService.getListaLembretes()
			.subscribe((lembretes: Lembrete[]) => {
				this.lembretes = lembretes
			}, () => {this.errorMsgComponent.setError('Falha ao buscar lembretes'); })
	}

	deletaLembrete(id: number) {
		this.lembreteService.deletaLembrete(id)
			.subscribe(() => {
				this.getListaLembretes();
			}, () => {this.errorMsgComponent.setError('Falha ao buscar lembretes'); })
	}

	existemLembretes(): boolean{
		return this.lembretes && this.lembretes.length > 0;
	}



}
