import {Component, OnInit} from '@angular/core';
import {GalleryService} from './gallery.service';
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation
} from 'ngx-gallery';
import 'hammerjs';



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];



  constructor(private galleryService: GalleryService) {
  }

  ngOnInit() {
    this.galleryImages = this.galleryService.getImagesGallery();

    this.galleryOptions = [
      {
        width: '100%',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        image: false,
        thumbnails: true,
        imageArrows: true,
        arrowPrevIcon: 'flaticon-left-arrow-1',
        arrowNextIcon: 'flaticon-right-arrow',
        closeIcon: 'flaticon-close',
        fullscreenIcon: 'fa fa-arrows',
        // spinnerIcon: 'fa fa-refresh fa-spin fa-3x fa-fw',
        // previewFullscreen: true
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 30,
        thumbnailsMargin: 30,
        thumbnailMargin: 30
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false,

      }
    ];
  }
}
