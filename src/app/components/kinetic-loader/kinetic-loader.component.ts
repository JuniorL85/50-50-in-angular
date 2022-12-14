import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-kinetic-loader',
  templateUrl: './kinetic-loader.component.html',
  styleUrls: ['./kinetic-loader.component.scss']
})
export class KineticLoaderComponent {

  @Input() @HostBinding('style.backgroundColor') bgColor = '#2c3e50';
  @Input() @HostBinding('style.height') height = '100vh';

}
