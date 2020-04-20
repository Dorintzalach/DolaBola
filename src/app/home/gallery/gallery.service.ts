import { Injectable } from '@angular/core';
import {NgxGalleryImage} from 'ngx-gallery';

@Injectable({
  providedIn: 'root'
})

export class GalleryService {
  private images: NgxGalleryImage[] ;

  constructor() {
    this.images = [
      {small: '/../../assets/pictures/gallery/gallery-img1.jpg',
        medium: '/../../assets/pictures/gallery/gallery-img1.jpg',
        big: '/../../assets/pictures/gallery/gallery-img1.jpg'
      },
      {small: '/../../assets/pictures/gallery/gallery-img2.jpg',
        medium: '/../../assets/pictures/gallery/gallery-img2.jpg',
        big: '/../../assets/pictures/gallery/gallery-img2.jpg'
      },
      {small: '/../../assets/pictures/gallery/gallery-img3.jpg',
        medium: '/../../assets/pictures/gallery/gallery-img3.jpg',
        big: '/../../assets/pictures/gallery/gallery-img3.jpg'
      },
      {small: '/../../assets/pictures/gallery/gallery-img4.jpg',
        medium: '/../../assets/pictures/gallery/gallery-img4.jpg',
        big: '/../../assets/pictures/gallery/gallery-img4.jpg'
      },
      {small: '/../../assets/pictures/gallery/gallery-img4.jpg',
        medium: '/../../assets/pictures/gallery/gallery-img4.jpg',
        big: '/../../assets/pictures/gallery/gallery-img4.jpg'
      }
    ];
  }
  getImagesGallery(): NgxGalleryImage[] {
    return this.images.slice();
  }
}
