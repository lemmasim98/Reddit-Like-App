import { Component, OnInit, HostBinding , Input} from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  @HostBinding('attr.class') cssClass = 'card mt-4';
  @Input() article: Article;

  //@Input() title: string;
  //@Input() link: string;
  constructor() {
    this.article = new Article('Angular 17', 'https://angular.io', 10);
  }
  voteUp() {
    this.article.voteUp();
    return false;
  }
  voteDown() {
    this.article.voteDown();
    return false;
  }
  
  ngOnInit() {}
}
