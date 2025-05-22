import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from './article/article.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ArticleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reddit-like-app';
  articles = [
    {title: "a", link: "b"}
  ]
  addArticle(titleH: HTMLInputElement, link: HTMLInputElement): boolean {

    console.log(`Adding article title: ${titleH.value} and link: ${link.value}`);

  return false;
  }
}
