import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ReactiveForm } from '../components/reactive-form/reactive-form';
import { TemplateForm } from '../components/template-form/template-form';
import { Home } from '../components/home/home';
import { LiveStock } from '../components/live-stock/live-stock';
import { About } from '../components/about/about';
import { Service } from '../components/service/service';
import { Privacy } from '../components/privacy/privacy';
import { Iform } from '../components/iform/iform';
import { Contact } from '../components/contact/contact';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLinkActive,
    RouterLink,
    ReactiveForm,
    TemplateForm,
    Home,
    Service,
    LiveStock,
    About,
    Contact,
    Privacy,
    Iform


  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular_20basic');
}
