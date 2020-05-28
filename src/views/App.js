import React, { Component, useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([
    { name: '图片上传', url: '/ReactMobileH5/upload' },
    { name: '图片加载', url: '/ReactMobileH5/animation' },
    { name: '日历', url: '/ReactMobileH5/calendar' }
  ])
  const [flag, setflag] = useState('1')

  useEffect(() => {
    setflag('2')
  })

  const jump = value => {
    location.href = value.url
  }

  return (
    <div className="body-wrap">
      <ul className="list-wrap">
        {data.map((item, index) => {
          return (
            <li
              className="list-wrap-item"
              onClick={() => jump(item)}
              key={index}
            >
              {item.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
