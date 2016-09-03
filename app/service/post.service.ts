import { Injectable } from '@angular/core';

@Injectable()

export class PostService {
  posts = [
    {
      "id": 1,
      "image": "http://f3savannahcat.com/wp-content/uploads/2015/05/which-savannah-is-right-for-you.jpg",
      "description": "savannah cat",
      "likes": 3,
      "iLike": true
    },
    {
      "id": 2,
      "image": "http://purrfectcatbreeds.com/wp-content/uploads/2014/06/bengal1.jpg",
      "description": "bengal cat",
      "likes": 10,
      "iLike": false
    },
    {
      "id": 3,
      "image": "http://mainecoon.org/wp-content/uploads/2016/03/maine-coon-cat2.jpg",
      "description": "maine coon",
      "likes": 300,
      "iLike": true
    }
  ];

  getPosts() {
    return this.posts;
  }

  getPost(id: number) {
    return this.posts.find((post) => post.id == id);
  }

  deletePost(id: number) {

  }
}
