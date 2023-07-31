import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-load-file',
  templateUrl: './load-file.component.html',
  styleUrls: ['./load-file.component.scss']
})
export class LoadFileComponent {

  public jsonData! : any;



  fileUpload( event : any ) {

    let file = event.target.files[0];

    let fileReader = new FileReader();

    fileReader.readAsBinaryString( file );

    fileReader.onload = ( e ) => {
      let workBooK = XLSX.read( fileReader.result, { type: 'binary' });
      let scheetNames = workBooK.SheetNames;
      let data = XLSX.utils.sheet_to_json( workBooK.Sheets[scheetNames[0]]);
      this.jsonData = JSON.stringify( data );

    }
  }

}
