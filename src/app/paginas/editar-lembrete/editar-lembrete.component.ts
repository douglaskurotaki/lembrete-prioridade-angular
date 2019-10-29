import { Lembrete } from './../../interfaces/lembrete';
import { LembreteService } from './../../services/lembrete.service';
import { ErrorMsgComponent } from './../../compartilhado/error-msg/error-msg.component';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-editar-lembrete',
  templateUrl: './editar-lembrete.component.html',
  styleUrls: ['./editar-lembrete.component.css']
})
export class EditarLembreteComponent {
	lembrete: Lembrete;
	@ViewChild(ErrorMsgComponent, { static: true }) errorMsgComponente: ErrorMsgComponent;

	constructor(private lembreteService: LembreteService,
		private activatedRoute: ActivatedRoute,
		private router: Router) {
			this.getLembrete(this.activatedRoute.snapshot.params.id);
		 }

	getLembrete(id: number) {
		this.lembreteService.getLembrete(id)
			.subscribe((lembrete: Lembrete) => {
				this.lembrete = lembrete;
			}, () => { this.errorMsgComponente.setError('Falha ao buscar o lembrete.'); });
	}

	atalizaLembrete(lembrete: Lembrete) {
		this.lembreteService.atualizaLembrete(lembrete)
			.subscribe(
				() => { this.router.navigateByUrl('/'); },
				() => { this.errorMsgComponente.setError('Falha ao atualizar o lembrete.'); }
			);
	}
}
