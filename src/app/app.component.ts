import { Component, OnInit } from '@angular/core';
import { Keyboard } from '@capacitor/keyboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'input-focus-error';

  ngOnInit() {
    Keyboard.setAccessoryBarVisible({isVisible: true})
  }
}
