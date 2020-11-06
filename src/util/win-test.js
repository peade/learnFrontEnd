window.ctiOperate = {
  info: {
    a: 1,
    b: 2
  },
  log() {
    console.log(this.info)
  },
  print() {
    console.log('print')
    this.log()
  },
  addEle() {
    const ele = document.getElementById('objectContainer')
    if (ele) {
      return
    }
    const div = document.createElement('div')
    div.id = 'objectContainer'
    div.innerHTML = `<object classid="CLSID:014D83A5-7E35-11D3-8AF9-00C0DF245E51" name="TextData">
    <param name="DataURL" value="names.txt" />
    <param name="FieldDelim" value="," />
    <param name="UseHeader" value="true" />
</object>`
    document.body.appendChild(div)
  },
  eleOp() {
    // eslint-disable-next-line
    console.log(window.TextData)
    try {
      const res = window.TextData.Initial()
      console.log(res)
    } catch (e) {
      console.log(e)
    }
  }
}
