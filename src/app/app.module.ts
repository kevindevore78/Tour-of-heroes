import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HeroesComponent } from './heroes/heroes.component';

imports: [
    BrowserModule,
    FormsModule
  ];

  declarations: [
    AppComponent,
    HeroesComponent
  ];