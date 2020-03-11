import { Injectable } from '@angular/core';
import {BlogItem} from './blog-item.model';
import {CommentItem} from './blog-item-detail/comments/comment-item.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BlogService {
  private blogItems: BlogItem[];
  private serverUrl = 'http://127.0.0.1:5000/';

  constructor(private http: HttpClient) {
    this.blogItems = [
      {
        title: 'BREAKFAST MUESLI', date:  Date.now(), likes: 44, comments: [],
        description: '5 minutes for getting yourself a delicious breakfast',
        imagePath: '../../assets/pictures/blog/blog-items/muesli.jpg',
        content: [{
          title: 'BREAKFAST MUESLI',
          desc: 'This recipe was the inspiration behind our on-the-go cacao & almond energy ball, ' +
            'which remains one of our most popular products. With just five simple ingredients, these couldnt be easier or more delicious.'
        },
          {
            title: 'INGREDIENTS',
            desc: '200g almonds 400g medjool dates 4 tablespoons raw cacao powder 2 ½ tablespoons almond butter 2 tablespoons coconut oil '
          },
          {
            title: 'INGREDIENTS',
            desc: '200g almonds 400g medjool dates 4 tablespoons raw cacao powder 2 ½ tablespoons almond butter 2 tablespoons coconut oil '
          },
          {
            title: 'METHOD',
            desc: 'Begin by placing the almonds in the food processor and pulsing until they are nicely crushed. Add the medjool dates and coconut oil and pulse until it’s fully mixed. Add the almond butter and cacao and then mix again in the food processor.'
          }
        ]
      },
      {
        title: 'CABBAGE RECIPES', date:  Date.now(), likes: 54, comments: [{owner: 'Ray Gold', date:  Date.now(), replies: [], content: 'Thank you for the test results. I am a big fan of Barilla GF pasta. I am going try your winner, but I admit am not a fan of anything with soy as an ingredient.' }],
        description: 'Cabbage leftovers for lunch',
        imagePath: '../../assets/pictures/blog/blog-items/cabbage.jpg',
        content: [{
          title: 'BREAKFAST MUESLI',
          desc: 'This recipe was the inspiration behind our on-the-go cacao & almond energy ball, ' +
            'which remains one of our most popular products. With just five simple ingredients, these couldnt be easier or more delicious.'
        },
          {
            title: 'INGREDIENTS',
            desc: '200g almonds 400g medjool dates 4 tablespoons raw cacao powder 2 ½ tablespoons almond butter 2 tablespoons coconut oil '
          },
          {
            title: 'INGREDIENTS',
            desc: '200g almonds 400g medjool dates 4 tablespoons raw cacao powder 2 ½ tablespoons almond butter 2 tablespoons coconut oil '
          },
          {
            title: 'METHOD',
            desc: 'Begin by placing the almonds in the food processor and pulsing until they are nicely crushed. Add the medjool dates and coconut oil and pulse until it’s fully mixed. Add the almond butter and cacao and then mix again in the food processor.'
          }
        ]
      },
      {
        title: 'PLATES & BETWEEN', date:  Date.now(), likes: 25, comments: [{owner: 'Ray Gold', date:  Date.now(), replies: [], content: 'Thank you for the test results. I am a big fan of Barilla GF pasta. I am going try your winner, but I admit am not a fan of anything with soy as an ingredient.' }],
        description: ' In a world full of shapes, colors and patterns, you can’t be boring',
        imagePath: '../../assets/pictures/blog/blog-items/plates-between.jpg',
        content: [{
          title: 'BREAKFAST MUESLI',
          desc: 'This recipe was the inspiration behind our on-the-go cacao & almond energy ball, ' +
            'which remains one of our most popular products. With just five simple ingredients, these couldnt be easier or more delicious.'
        },
          {
            title: 'INGREDIENTS',
            desc: '200g almonds 400g medjool dates 4 tablespoons raw cacao powder 2 ½ tablespoons almond butter 2 tablespoons coconut oil '
          },
          {
            title: 'INGREDIENTS',
            desc: '200g almonds 400g medjool dates 4 tablespoons raw cacao powder 2 ½ tablespoons almond butter 2 tablespoons coconut oil '
          },
          {
            title: 'METHOD',
            desc: 'Begin by placing the almonds in the food processor and pulsing until they are nicely crushed. Add the medjool dates and coconut oil and pulse until it’s fully mixed. Add the almond butter and cacao and then mix again in the food processor.'
          }
        ]
      },
      {
        title: 'PINK LADY COCKTAIL', date:  Date.now(), likes: 80, comments: [{owner: 'Ray Gold', date:  Date.now(), replies: [], content: 'Thank you for the test results. I am a big fan of Barilla GF pasta. I am going try your winner, but I admit am not a fan of anything with soy as an ingredient.' }],
        description: 'Every cocktail needs some pinky powder to be magical',
        imagePath: '../../assets/pictures/blog/blog-items/pink-lady-cocktail.jpg',
        content: [{
          title: 'BREAKFAST MUESLI',
          desc: 'This recipe was the inspiration behind our on-the-go cacao & almond energy ball, ' +
            'which remains one of our most popular products. With just five simple ingredients, these couldnt be easier or more delicious.'
        },
          {
            title: 'INGREDIENTS',
            desc: '200g almonds 400g medjool dates 4 tablespoons raw cacao powder 2 ½ tablespoons almond butter 2 tablespoons coconut oil '
          },
          {
            title: 'INGREDIENTS',
            desc: '200g almonds 400g medjool dates 4 tablespoons raw cacao powder 2 ½ tablespoons almond butter 2 tablespoons coconut oil '
          },
          {
            title: 'METHOD',
            desc: 'Begin by placing the almonds in the food processor and pulsing until they are nicely crushed. Add the medjool dates and coconut oil and pulse until it’s fully mixed. Add the almond butter and cacao and then mix again in the food processor.'
          }
        ]
      },
      {
        title: 'KITCHEN APGRADE', date:  Date.now(), likes: 39, comments: [{owner: 'Ray Gold', date: Date.now(), replies: [], content: 'Thank you for the test results. I am a big fan of Barilla GF pasta. I am going try your winner, but I admit am not a fan of anything with soy as an ingredient.' }],
        description: '20 new products you must heard of before everyone!',
        imagePath: '../../assets/pictures/blog/blog-items/kitchen-apgrade.jpg',
        content: [{
          title: 'BREAKFAST MUESLI',
          desc: 'This recipe was the inspiration behind our on-the-go cacao & almond energy ball, ' +
            'which remains one of our most popular products. With just five simple ingredients, these couldnt be easier or more delicious.'
        },
          {
            title: 'INGREDIENTS',
            desc: '200g almonds 400g medjool dates 4 tablespoons raw cacao powder 2 ½ tablespoons almond butter 2 tablespoons coconut oil '
          },
          {
            title: 'METHOD',
            desc: 'Begin by placing the almonds in the food processor and pulsing until they are nicely crushed. Add the medjool dates and coconut oil and pulse until it’s fully mixed. Add the almond butter and cacao and then mix again in the food processor.'
          }
        ]
      },
      {
        title: 'OH MY PIE', date:  Date.now(), likes: 97, comments: [{owner: 'Ray Gold', date:  Date.now(), replies: [{owner: 'Ray Gold', date:  Date.now(), replies: [], content: 'Thank you for the test results. I am a big fan of Barilla GF pasta. I am going try your winner, but I admit am not a fan of anything with soy as an ingredient.' }],
          content: 'Thank you for the test results. I am a big fan of Barilla GF pasta. I am going try your winner, but I admit am not a fan of anything with soy as an ingredient.' }],
        description: '20 new products you must heard of before everyone!',
        imagePath: '../../assets/pictures/blog/blog-items/my-pie.jpg',
        content: [{
          title: 'OH MY PIE',
          desc: 'This recipe was the inspiration behind our on-the-go cacao & almond energy ball, ' +
            'which remains one of our most popular products. With just five simple ingredients, these couldnt be easier or more delicious.'
        },
          {
            title: 'INGREDIENTS',
            desc: '200g almonds 400g medjool dates 4 tablespoons raw cacao powder ' +
              '2 ½ tablespoons almond butter 2 tablespoons coconut oil'
          },
          {
            title: 'METHOD',
            desc: 'Begin by placing the almonds in the food processor and pulsing until they are nicely crushed. Add the medjool dates and coconut oil and pulse until it’s fully mixed. Add the almond butter and cacao and then mix again in the food processor.'
          }
        ]
      }
    ];
  }

  getBlogItems(): BlogItem[] {
    // this.blogItems =
    return this.blogItems.slice();
  }

  getBlogItem(id): BlogItem {
    return this.blogItems[id];
  }

  setComment(id: number, comment: CommentItem) {
    this.blogItems[id].comments.push(comment);
  }

  setReplyToComment(blogItemId: number, commentItemId: number, reply: CommentItem) {
    console.log(blogItemId);
    console.log(commentItemId);
    this.blogItems[blogItemId].comments[commentItemId].replies.push(reply);
  }
}
