import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-imagelist',
  templateUrl: './imagelist.component.html',
  styleUrls: ['./imagelist.component.css']
})
export class ImagelistComponent implements OnInit {
  imageUrls: string[] = ['https://images.only.com/media/ljbbvrfj/on-storefront-01-fr.jpg?v=78050eaf-6677-4e05-841e-d12bfbd02d77&format=webp&width=2048&quality=80&key=1-1-3'
    , 'https://enquetedestyle.com/wp-content/uploads/2022/11/banniere-secondemain-1140x444.png',
    'https://www.mysweetcactus.com/wp-content/uploads/2020/04/352759_6258803c3f60406eaa5fc7f33b26e616-mv2.jpg'];
  currentImageIndex: number = 0;
  currentImageUrl: string = '';

  ngOnInit() {
    this.showCurrentImage();
    setInterval(() => {
      this.showNextImage();
    }, 5000); // Change image every 5 seconds
  }

  showNextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.imageUrls.length;
    this.showCurrentImage();
  }

  showCurrentImage() {
    this.currentImageUrl = this.imageUrls[this.currentImageIndex];
  }
}
