import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('voleiVideo') videoElement!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    const video: HTMLVideoElement = this.videoElement.nativeElement;

    video.setAttribute('autoplay', '');
    video.muted = true; // Certifique-se de que o vídeo está silenciado

    const tryPlayVideo = () => {
      console.log('Tentando reproduzir o vídeo...');
      video.play().then(() => {
        console.log('Vídeo está reproduzindo.');
      }).catch(error => {
        console.error('A reprodução automática falhou:', error);
      });
    };

    video.addEventListener('canplay', () => {
      console.log('Evento canplay disparado');
      tryPlayVideo();
    });

    video.addEventListener('loadeddata', () => {
      console.log('Evento loadeddata disparado');
      tryPlayVideo();
    });

    // Tentar reproduzir o vídeo imediatamente
    tryPlayVideo();
  }
}
