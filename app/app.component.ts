import { Component } from '@angular/core';
import { PostService } from '../app/service/post.service';

@Component({
  selector: 'app',
  templateUrl: './app/app.component.html',
  providers: [ PostService ]
})

export class AppComponent {
  postService: PostService;
  posts = [];

  constructor(ps: PostService) {
    this.postService = ps;
  }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }
}
