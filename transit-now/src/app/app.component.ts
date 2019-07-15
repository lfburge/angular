import { Component } from '@angular/core';
import { FrameworkConfigService, FrameworkConfigSettings } from '../fw/services/framework-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TransitNow';

  constructor (private frameworkConfigService: FrameworkConfigService) {
    const config: FrameworkConfigSettings = {
      socialIcons: [
        { imageFile: 'assets/images/toolbar/social-fb-bw.png', alt: 'Facebook', link: 'http://www.facebook.com'},
        { imageFile: 'assets/images/toolbar/social-google-bw.png', alt: 'Google +', link: 'http://www.google.com' },
        { imageFile: 'assets/images/toolbar/social-twitter-bw.png', alt: 'Twitter', link: 'http://www.twitter.com' }
      ],
      showLanguageSelector: true,
      showUserControls: true,
      showStatusBar: true,
      showStatusBarBreakpoint: 800
    };

    frameworkConfigService.configure(config);
  }
}

