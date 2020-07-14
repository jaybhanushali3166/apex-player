import { Injectable } from '@angular/core';
import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CloudService {
  files: any = [
    // tslint:disable-next-line: max-line-length
    {
      url:
        "https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3",
      name: "Perfect",
      artist: " Ed Sheeran"
    },
    {
      // tslint:disable-next-line: max-line-length
      url:
        " https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
      name: "Circles",
      artist: "Post Malone"
    },
    {
      url:
        "https://ia801503.us.archive.org/15/items/TheBeatlesPennyLane_201805/The%20Beatles%20-%20Penny%20Lane.mp3",
      name: "Penny Lane",
      artist: "The Beatles"
    }
  ];

  getFiles() {
    return of(this.files);
  }
}