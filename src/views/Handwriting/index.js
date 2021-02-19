import React, { Component } from 'react'
import { Button, Spin, Toast, DefaultPage } from 'pf-component'
// import Ajax from '../../assets/js/ajax'
import SignaturePad from 'signature_pad/dist/signature_pad.min.js'
import './index.less'

let canvas = null

export default class Example extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countdown: 6,
      rotateCanvas: {
        height: '',
        width: ''
      },
      isError: false,
      imgUrl: '',
      content: '',
      bottomCtr: false,
      comState: '',
      loading: false,
      disable: true
    }
    this.timeout = ''
    this.OrderEid = ''
    this.info = ''
    this.signaturePad = null
  }

  componentDidMount() {
    this.setState({
      loading: true
    })
    this.signName()
  }

  componentWillUnmount() {}

  signName = () => {
    canvas = document.querySelector('canvas')
    this.signaturePad = new SignaturePad(canvas)
    this.signaturePad.maxWidth = 4
    this.signaturePad.minWidth = 2
    this.signaturePad.onBegin = () => {
      document.querySelector('.centerConten').style.display = 'none'
      if (this.signaturePad.isEmpty()) {
        this.setState({
          bottomCtr: false
        })
      } else {
        this.setState({
          bottomCtr: true
        })
      }
    }
    this.setState({
      rotateCanvas: document.createElement('canvas')
    })
    window.onresize = this.resizeCanvas
    this.resizeCanvas()
  }

  // 清除的
  reSign = () => {
    this.setState({
      bottomCtr: false,
      imgUrl: ''
    })
    this.signaturePad.clear()
  }

  // 提交的
  submit = () => {
    if (!this.signaturePad.isEmpty()) {
      // 调用接口
      this.signaturePad.toDataURL('image/png')
    }
  }

  resizeCanvas() {
    let ratio = Math.max(window.devicePixelRatio || 1, 1)
    // ratio可以控制像素,在安卓手机上转化的base64的之后文本太大，接口不通，所以将像素减小
    ratio = 1
    canvas.height = document.querySelector('.center').offsetHeight * ratio
    canvas.width = canvas.offsetWidth * ratio
    canvas.height = canvas.offsetHeight * ratio
    let data = Object.assign({}, this.state.rotateCanvas, {
      width: canvas.width,
      height: canvas.height
    })
    this.setState({
      rotateCanvas: data
    })
    canvas.getContext('2d').scale(ratio, ratio)
  }

  render() {
    const { content, comState } = this.state
    return (
      <div className="wrap">
        <div className="left-wrap">
          <div className="left-1" onClick={this.reSign}>
            <div className="leftText-1">重新签名</div>
          </div>

          <div className="left-1 left-2" onClick={this.submit}>
            <div className="leftText-1">提交</div>
          </div>

          <div onClick={this.seeProblem} className="leftText-3">
            遇到验证问题
          </div>
        </div>

        <div className="center">
          <div className="centerConten">请在该区域中签名</div>
          <canvas id="canvas" onFocus={this.write} />
        </div>
        <div className="right">
          <p className="rightText">手写签名</p>
        </div>
      </div>
    )
  }
}
