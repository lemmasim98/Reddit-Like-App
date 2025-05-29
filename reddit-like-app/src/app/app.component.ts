import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ArticleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  articles:Article[];   // <-- component property
  constructor(){
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
    ];
  }

addArticle(form: HTMLFormElement, title: HTMLInputElement, link: HTMLInputElement): boolean {
  console.log(`Adding article title: ${title.value} and link: ${link.value}`);
  this.articles.push(new Article(title.value, link.value, 0));
  form.reset();
  return false;
}


  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
