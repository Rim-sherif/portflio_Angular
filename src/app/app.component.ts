import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { AboutComponent } from './about/about.component';
import { SkilsComponent } from './skils/skils.component';
import { PortfiloComponent } from './portfilo/portfilo.component';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent,FooterComponent,AboutComponent,SkilsComponent,PortfiloComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portflio';
}
