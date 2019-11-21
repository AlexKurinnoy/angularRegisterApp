import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {ArticleDetails, EditartService} from '../editart.service';
import {JSON_CONFIG_FILENAME} from 'tslint/lib/configuration';

@Component({
  selector: 'app-articllist',
  templateUrl: './articllist.component.html',
  styleUrls: ['./articllist.component.css']
})
export class ArticllistComponent implements OnInit {
  nameControl: FormControl;
  article: ArticleDetails;
  regForm: FormGroup;



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
