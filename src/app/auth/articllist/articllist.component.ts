import { Component, OnInit } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {ArticleDetails, EditartService} from '../editart.service';

@Component({
  selector: 'app-articllist',
  templateUrl: './articllist.component.html',
  styleUrls: ['./articllist.component.css']
})
export class ArticllistComponent implements OnInit {
  nameControl: FormControl;
  article: ArticleDetails;
  text: string

  constructor(private editartService: EditartService) { }

  ngOnInit() {
    this.article = this.editartService.getAritcle()
    this.text = this.article.article
    console.log(this.text);
    // this.nameControl = new FormControl(JSON.stringify(this.text));
    // console.log(this.nameControl);
  }
}
