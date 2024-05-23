import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-youtube-video-card',
  templateUrl: './youtube-video-card.component.html',
  styleUrls: ['./youtube-video-card.component.css']
})
export class YoutubeVideoCardComponent {
  @Input() videoId: string | undefined;
  @Input() videoId1: any;
  @Input() videoId2: any;
  @Input() videoId3: any;
  @Input() videoId4: any;
}

