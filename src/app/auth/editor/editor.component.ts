import {Component, OnInit} from '@angular/core';
import {ArticleDetails, EditartService} from '../editart.service';


@Component({
  templateUrl: './editor.component.html'
})



export class EditorComponent implements OnInit  {
  constructor(private editartService: EditartService) {}
  editorKey = false;
  articleDetails: ArticleDetails[];



  ngOnInit() {
    this.getArticles()
  }



  newArticle() {
  //   console.log(this.emptyArticle)
    this.editartService.newArticle()
  //
    this.editorKey = !this.editorKey;
  }
  getArticles(): void {
    this.editartService.getArticles().subscribe(articleDetails=>{
      this.articleDetails = articleDetails;
      // this.editorKey = !this.editorKey ;
    });
  }
  onHide() {
    this.editorKey=false;
    this.getArticles()
    console.log("onHide getArticles")
  }

  editArticle(editebleArticle: ArticleDetails): void{
    this.editartService.editAritcle(editebleArticle);
    this.editorKey = !this.editorKey;
  }

  delArticle(delArt: ArticleDetails): void {
    this.editartService.delArticle(delArt);
    this.getArticles()
  }
}
