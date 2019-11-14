import {Component} from '@angular/core';
import {ArticleDetails, EditartService} from '../editart.service';


@Component({
  templateUrl: './editor.component.html'
})



export class EditorComponent {
  constructor(private editartService: EditartService) {}

  editorKey = false;



  articleDetails: ArticleDetails[];
  getArticles(): void {
    this.editartService.getArticles().subscribe(articleDetails=>{
      this.articleDetails = articleDetails;
    });
  }

  editArticle(editebleArticle: ArticleDetails): void{
    this.editartService.addAritcle(editebleArticle);
    this.editorKey = !this.editorKey ;
  }

}
