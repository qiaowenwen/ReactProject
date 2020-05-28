import React, { Component, useState, useEffect } from 'react'
import './index.less'
export default class PageIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '',
      loading: false
    }
  }

  onFileChange = () => {

    // const fileSelectorEl = this.fileSelectorInput
    // const files = fileSelectorEl.files
    // this.setState({
    //   url: window.URL.createObjectURL(files[0])
    // })
  }
  loading = () => {
    this.setState({
      loading: true
    })
  }

  render() {
    const { url, loading } = this.state
    return (
      <div className='upload-wrap'>
        {loading && <div className="loading-wrap"><div className='loading-center'><i className='iconfont icon-loading1' />
        </div></div>}
        <div className='upload-wrap-button'>
          <div className="button">
            <span>
              图片的上传
            </span>
          </div>
          <input
            style={{

            }}
            className='upload-input'
            ref={
              input => {
                if (input) {
                  this.fileSelectorInput = input
                }
              }
            }
            type="file" accept={'.png,.jpg'}
            onChange={this.onFileChange}
            onClick={this.loading}
          />
          <img src={url} alt="" />
        </div>

        <div className="flex-text">
          <div>
            1212
             </div>
          <div>
            1212
             </div>
          <div>
            1212
             </div>
          <div>
            1212
             </div>
          <div>
            1212
             </div>
        </div>
      </div>
    )
  }
}