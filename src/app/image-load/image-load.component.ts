import { Component } from '@angular/core';

@Component({
  selector: 'app-image-load',
  templateUrl: './image-load.component.html',
  styleUrls: ['./image-load.component.css']
})
export class ImageLoadComponent {
  selectedFile: File | null = null;
  imageUrl?: string | ArrayBuffer | null = null;

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.selectedFile = file;

    // Display image preview
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imageUrl = e.target?.result;
      // @ts-ignore
      console.log('iiii',this.imageUrl)
    };
    reader.readAsDataURL(file);
  }

  onSubmit() {
    // Handle form submission, you can send the image file to a server or perform other actions.
    // For now, just log the file information.
    if (this.selectedFile) {
      console.log('Selected File:', this.selectedFile);
    }
  }

}
