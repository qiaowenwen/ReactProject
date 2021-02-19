// 弹框的思路
// 方法1: 设置一个div，div里面的内容防止冒泡
// 方法2: 设置一个div，先设置一个遮罩层，在设置里面的内容

import React, { Component, useState, useEffect } from 'react'
import './index.less'
import onClickOutside from 'react-onclickoutside'
class PageIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onFileChange = () => {
    const fileSelectorEl = this.fileSelectorInput
    const files = fileSelectorEl.files
    this.setState({
      url: window.URL.createObjectURL(files[0])
    })
  }
  loading = () => {
    this.setState({
      loading: true
    })
  }

  getlen = () => {
    return (
      <div
        style={{
          position: 'relative',
          backgroundColor: '#ffffff',
          width: '200px'
        }}
        onClick={e => {
          // 阻止事件冒泡
          e.stopPropagation()
        }}
      >
        <div
          style={{
            height: '500px',
            overflow: 'scroll',
            zIndex: 999999,
            boxSizing: 'border-box',
            paddingBottom: '50px',
            textAlign: 'center'
          }}
        >
          我是弹框的内容。弹框的内容你看看就知道啦，我们都知道的啊，你只需要看看就可以了
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            zIndex: 999999,
            width: '100%',
            backgroundColor: '#fff',
            textAlign: 'center'
          }}
          onClick={e => this.sure(e)}
        >
          确定
        </div>
      </div>
    )
  }

  open = () => {
    this.setState(
      {
        open: true
      },
      () => {
        document.body.style.overflow = 'hidden'
      }
    )
  }

  sure = e => {
    e.stopPropagation()
    alert('88989')
  }

  outClick = e => {
    this.setState(
      {
        open: false
      },
      () => {
        document.body.style.overflow = 'auto'
      }
    )
  }

  render() {
    const { open } = this.state

    return (
      <div>
        {/* {open && (
          // 方法1
          <div>
            <div
              style={{
                // position: 'fixed',
                // top: 0,
                // right: 0,
                // left: 0,
                // bottom: 0,
                // height: '100%',
                // zIndex: '1050'
                position: 'fixed',
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.5)',
                // backgroundColor: '#373737',
                height: '100%',
                width: '100%',
                zIndex: '1050',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onClick={e => this.outClick(e)}
            >
              {this.getlen()}
            </div>
          </div>
        )} */}

        {open && (
          // 方法1
          // <div>
            /* <div
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
                backgroundColor: '#373737',
                height: '100%',
                width: '100%',
                opacity: '0.3',
                zIndex: '1050'
              }}
            ></div> */
            <div
              style={{
                // position: 'fixed',
                // top: 0,
                // right: 0,
                // left: 0,
                // bottom: 0,
                // height: '100%',
                // zIndex: '1050'
                position: 'fixed',
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.5)',
                // backgroundColor: '#373737',
                height: '100%',
                width: '100%',
                zIndex: '1050',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onClick={e => this.outClick(e)}
            >
              {this.getlen()}
            </div>
        )}

        <div onClick={this.open}>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
        <div>DEDEE</div>
      </div>
    )
  }
}

export default PageIndex
