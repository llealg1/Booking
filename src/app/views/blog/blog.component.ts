import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
const blog5 = 'assets/images/blog/05.jpg'
const blog6 = 'assets/images/blog/06.jpg'
const blog8 = 'assets/images/blog/08.jpg'

type BlogType = {
  title: string
  date: string
  image: string
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

  blogData: BlogType[] = [
    {
      title: 'Bad habits that people in the business industry need to quit',
      date: 'Sep 01, 2022',
      image: blog5,
    },
    {
      title: 'Around the web: 20 fabulous info graphics about business',
      date: 'Sep 15, 2022',
      image: blog6,
    },
    {
      title:
        "Ten unconventional tips about startups that you can't learn from books",
      date: 'Sep 28, 2022',
      image: blog8,
    },
  ]
}
