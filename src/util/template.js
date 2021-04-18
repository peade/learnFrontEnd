class Game {
  constructor() {
    if (this.play !== Game.prototype.play) {
      throw new Error("play method is final, can't be modify!")
    }
  }
  initialize() {}
  startPlay() {}
  endPlay() {}
  play() {
    // 初始化
    this.initialize()
    // 开始
    this.startPlay()
    // 结束
    this.endPlay()
  }
}

export class Cricket extends Game {
  endPlay() {
    console.log('Cricket Game Finished!')
  }
  initialize() {
    console.log('Cricket Game Initialized! Start playing.')
  }
  startPlay() {
    console.log('Cricket Game Started. Enjoy the game!')
  }
}
export class Football extends Game {
  endPlay() {
    console.log('Football Game Finished!')
  }
  initialize() {
    console.log('Football Game Initialized! Start playing.')
  }
  startPlay() {
    console.log('Football Game Started. Enjoy the game!')
  }
}
