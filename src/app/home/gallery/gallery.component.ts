import {Component, HostListener, OnInit} from '@angular/core';
import {GalleryService} from './gallery.service';
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation, NgxGalleryImageSize
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
  rowSize: number;



  constructor(private galleryService: GalleryService) {
    this.rowSize = this.getNumberOfImagesInRow();
    console.log(this.rowSize);
  }

  ngOnInit() {
    this.galleryImages = this.galleryService.getImagesGallery();
    this.rowSize = this.getNumberOfImagesInRow();
    console.log(this.rowSize);
    this.galleryOptions = [
      {
        width: '100%',
        height: '380px',
        // fullWidth: true,
        image: false,
        imageArrows: true,
        imageAnimation: NgxGalleryAnimation.Slide,
        imageSize: NgxGalleryImageSize.Cover,
        previewInfinityMove: true,
        imageSwipe: true,
        previewSwipe: true,
        thumbnailsSwipe: true,
        imageArrowsAutoHide: true,
        thumbnailsArrowsAutoHide: true,
        imageBullets: true,
        thumbnails: true,
        thumbnailsColumns: 4,
        thumbnailsArrows: true,
        previewAnimation: true,
        previewBullets: true,
        arrowPrevIcon: 'flaticon-left-arrow-1',
        arrowNextIcon: 'flaticon-right-arrow',
        closeIcon: 'flaticon-close',
        fullscreenIcon: 'fa fa-arrows',
      },
      // max-width 800
      {
        breakpoint: 700,
        width: '100%',
        height: '300px',
        imagePercent: 100,
        imageBullets: true,
        thumbnailsPercent: 30,
        thumbnailsMargin: 50,
        thumbnailsColumns: 2,
        imageInfinityMove: true,
        thumbnailsArrowsAutoHide: true,
      },
      // max-width 400
      {
        breakpoint: 400,
        width: '100%',
        height: '250px',
        imagePercent: 100,
        imageBullets: true,
        thumbnailsPercent: 30,
        thumbnailsMargin: 50,
        thumbnailsColumns: 2,
        imageInfinityMove: true,
        thumbnailsArrowsAutoHide: true,
        preview: true,
      }
    ];
    // console.log(this.galleryOptions[0].thumbnailsColumns);
  }

  getNumberOfImagesInRow(): number {
    const width = window.innerWidth;
    if ( width < 720 ) {
      return 2;
    } else {
      return 3;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const currentWidth = event.target.innerWidth;
    if (currentWidth < 720) {
      this.rowSize = 2;
    } else {
      this.rowSize = 4;
    }
  }
}
