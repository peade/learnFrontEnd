// 适配器模式
class VlcPlayer {
  playVlc(fileName) {
    console.log(`Playing vlc file. Name: ${fileName}`)
  }
}

class Mp4Player {
  playMp4(fileName) {
    console.log(`Playing mp4 file. Name: ${fileName}`)
  }
}

class MediaAdapter {
  constructor(audioType) {
    switch (audioType) {
      case 'vlc':
        MediaAdapter.advancedMusicPlayer = new VlcPlayer()
        break
      case 'mp4':
        MediaAdapter.advancedMusicPlayer = new Mp4Player()
        break
    }
  }
  play(audioType, fileName) {
    switch (audioType) {
      case 'vlc':
        MediaAdapter.advancedMusicPlayer.playVlc(fileName)
        break
      case 'mp4':
        MediaAdapter.advancedMusicPlayer.playMp4(fileName)
        break
    }
  }
}

export class AudioPlayer {
  play(audioType, fileName) {
    switch (audioType) {
      case 'mp3':
        console.log('Playing mp3 file. Name: ' + fileName)
        break
      case 'vlc':
      case 'mp4':
        AudioPlayer.mediaAdapter = new MediaAdapter(audioType)
        AudioPlayer.mediaAdapter.play(audioType, fileName)
        break
      default:
        console.log('Invalid media. ' + audioType + ' format not supported')
        break
    }
  }
}
