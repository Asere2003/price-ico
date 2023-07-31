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
    // console.log( e.target.files );
    // const selectedFile = e.target.files[0];
    // const fileReader = new FileReader();
    // fileReader.readAsBinaryString( selectedFile );
    // fileReader.onload = ( e: any ) => {
    //   console.log( e );
    //   let binaryData = e.target?.result;
    //   let workBook   = XLSX.read(binaryData,{ type: 'binary' });
    //   workBook.SheetNames.forEach( sheet => {
    //     const data = XLSX.utils.sheet_to_json( workBook.Sheets[ sheet ]);
    //     this.jasonData = JSON.stringify( data, undefined, 4 );
    //   } )
    // }
  }

}
