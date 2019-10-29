import { Lembrete } from './../../interfaces/lembrete';
import { LembreteService } from './../../services/lembrete.service';
import { ErrorMsgComponent } from './../../compartilhado/error-msg/error-msg.component';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-lembrete',
  templateUrl: './criar-lembrete.component.html',
  styleUrls: ['./criar-lembrete.component.css']
})
export class CriarLembreteComponent {
	@ViewChild(ErrorMsgComponent, { static:true }) errorMsgComponent: ErrorMsgComponent;

  constructor(private lembreteService: LembreteService, private router: Router) { }

  addLembrete(lembrete: Lembrete) {
		this.lembreteService.addLembrete(lembrete)
			.subscribe(
				() => { this.router.navigateByUrl('/'); },
				() => { this.errorMsgComponent.setError('Falha ao adicionar lembrete.'); }
			);
	}

}
