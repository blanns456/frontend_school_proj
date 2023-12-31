import { Component ,ViewChild} from '@angular/core';

import { NgSignaturePadOptions, SignaturePadComponent } from '@almothafar/angular-signature-pad';


@Component({
  selector: 'app-enroll-signature-pad',
  templateUrl: './enroll-signature-pad.component.html',
  styleUrls: ['./enroll-signature-pad.component.css']
})
export class EnrollSignaturePadComponent {
  @ViewChild('signature')
  public signaturePad!: SignaturePadComponent;

  private signaturePadOptions: NgSignaturePadOptions = { // passed through to szimek/signature_pad constructor
    minWidth: 5,
    canvasWidth: 500,
    canvasHeight: 300
  };

  constructor() {
    // no-op
  }

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  drawComplete(event: MouseEvent | Touch) {
    // will be notified of szimek/signature_pad's onEnd event
    console.log('Completed drawing', event);
    console.log(this.signaturePad.toDataURL());
  }

  drawStart(event: MouseEvent | Touch) {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('Start drawing', event);
  }
}
