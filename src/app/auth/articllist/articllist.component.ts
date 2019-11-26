import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {ArticleDetails, EditartService} from '../editart.service';
import {JSON_CONFIG_FILENAME} from 'tslint/lib/configuration';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-articllist',
  templateUrl: './articllist.component.html',
  styleUrls: ['./articllist.component.css']
})
export class ArticllistComponent implements OnInit {

  article: ArticleDetails;
  regForm: FormGroup;
  public Editor = ClassicEditor;
  CKEconfig = {
    ckfinder: {
      uploadUrl: 'http://localhost:3000/upload'
    },
    toolbar: [ 'imageUpload',  '|', 'heading', '|', 'bold', 'italic', 'bulletedList', 'numberedList', '|', 'blockQuote', 'insertTable', 'mediaEmbed', 'undo', 'redo'],
    image: {
      // You need to configure the image toolbar, too, so it uses the new style buttons.
      toolbar: [ 'imageTextAlternative', '|', 'imageStyle:alignLeft', 'imageStyle:full', 'imageStyle:alignRight' ],

      styles: [
        // This option is equal to a situation where no style is applied.
        'full',

        // This represents an image aligned to the left.
        'alignLeft',

        // This represents an image aligned to the right.
        'alignRight'
      ]
    }
  }


  constructor(private editartService: EditartService) { }

  @Output() onHide: EventEmitter<boolean> = new EventEmitter<boolean>();

  public  setHide(){
      this.onHide.emit(false);
    }

  ngOnInit() {
    this.regForm = new FormGroup({
      title: new FormControl(),
      author: new FormControl(),
      section: new FormControl(),
      tag: new FormControl(),
      article: new FormControl()
    })
    console.log('init work')
    this.article = this.editartService.getAritcle();
  }


  updateArticle() {
    this.editartService.updateUrticles(this.article);
    this.setHide();
    console.log("updateArticle work");
  }

   createArticle() {
     this.editartService.createArticle(this.article);
     this.setHide();
     // this.article = this.emptyArticle;
     // console.log("createA"+ JSON.stringify(this.emptyArticle));
  }

}
