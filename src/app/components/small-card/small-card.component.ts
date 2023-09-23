import { Component } from '@angular/core';

interface Posts {
  title: string;
  image: string;
  description: string;
}

const mockedPosts: Posts[] = [{
  title: 'Post 1',
  image: 'https://picsum.photos/600/600',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Donec auctor, nisl id aliquam sodales, nunc nibh aliquet nisi, 
  vitae aliquam nisl nunc eget nunc. Donec auctor, 
  nisl id aliquam sodales, nunc nibh aliquet nisi, 
  vitae aliquam nisl nunc eget nunc.`
},
{
  title: 'Post 2',
  image: 'https://picsum.photos/600/600',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Donec auctor, nisl id aliquam sodales, nunc nibh aliquet nisi, 
  vitae aliquam nisl nunc eget nunc. Donec auctor, 
  nisl id aliquam sodales, nunc nibh aliquet nisi, 
  vitae aliquam nisl nunc eget nunc.`
},
{
  title: 'Post 3',
  image: 'https://picsum.photos/600/600',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Donec auctor, nisl id aliquam sodales, nunc nibh aliquet nisi, 
  vitae aliquam nisl nunc eget nunc. Donec auctor, 
  nisl id aliquam sodales, nunc nibh aliquet nisi, 
  vitae aliquam nisl nunc eget nunc.`
},
]

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  posts: Posts[] = mockedPosts;
}
