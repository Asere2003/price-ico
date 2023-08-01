import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-load-file',
  templateUrl: './load-file.component.html',
  styleUrls: ['./load-file.component.scss']
})
export class LoadFileComponent {

  @ViewChild('takeInput')
  public inputValue! : ElementRef<HTMLInputElement>;

  public jsonData! : any;
  public complete : string ='0';
  public nameElementFile! : string;




  fileUpload( event : any ) {

    console.log( this.inputValue.nativeElement.value.split('\\') );

    let file = event.target.files[0];

    let fileReader = new FileReader();

    fileReader.readAsBinaryString( file );

    fileReader.onload = ( event: any) => {
      let workBooK = XLSX.read( fileReader.result, { type: 'binary' });
      let scheetNames = workBooK.SheetNames;
      let data = XLSX.utils.sheet_to_json( workBooK.Sheets[scheetNames[0]]);
      this.jsonData = JSON.stringify( data );
      this.changeProperties();

    }
  }
  changeProperties() {
    this.nameElementFile = this.inputValue.nativeElement.value.split('\\')[2];
    this.complete = '100';
  }


  saveFile(  ) : void {
    this.resetinput();
  }

  resetinput( ) : void {
    this.inputValue.nativeElement.value = '';
  }


}
