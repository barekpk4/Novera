
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink} from '@angular/router';

import 'swiper/element/bundle';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
    RouterLink        
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Home {

  cards = [
    {
      title: 'Premium Cattle',
      description: 'Healthy and high-quality cattle.',
      image: 'assets/images/OX_1.jpg'
    },
    {
      title: 'Farm Delivery',
      description: 'Safe delivery all over Bangladesh.',
      image: 'assets/images/cow_Delivery.jpg'
    },
    {
      title: 'Organic Feed',
      description: 'Nutritious feed for healthy cattle.',
      image: 'assets/images/feed.jpg'
    },
    {
      title: 'Veterinary Care',
      description: 'Professional veterinary support.',
      image: 'assets/images/vet.jpg'
    },
    {
      title: 'Healthy Farm',
      description: 'Clean and hygienic environment.',
      image: 'assets/images/farm.jpg'
    }
  ];

}