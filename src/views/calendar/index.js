/**
 * 1.获取该年月第一天对应的星期几
 * 2.获取该年月中当月对应的总的天数
 * 3.获取该年月最后一天对应的星期几
 * 4.将第一天之前空缺连接中间天数连接最后一天的天数
 * （1）获得的月份是从当月对应的相加
 * （2）获得的星期是星期一到星期日 对应的是1到0
 */

import React, { Component } from 'react'
import './index.less'
import classNames from 'classnames'
export default class PageIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      year: new Date().getFullYear(),
      month: new Date().getMonth(), //获得的月份是当前月份减1
      newDatas: [],
      yearList: [],
      showYear: false,
      showMonth: false,
      monthList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      nowYear: new Date().getFullYear(),
      nowMonth: new Date().getMonth(),
      today: new Date().getDate()
    }
  }

  componentDidMount = () => {
    const { yearList, year } = this.state

    for (let i = year; i > year - 20; i--) {
      yearList.unshift(i)
    }

    for (let j = year + 1; j < year + 20; j++) {
      yearList.push(jj)
    }
    this.setState({
      yearList
    })
    this.getFullDay()
  }

  getFullDay = () => {
    const { year, month } = this.state
    // 获取这个月的第一天星期几
    let firstDay = new Date(year, month, 1)
    let firstWeekDay = firstDay.getDay()

    // 获取这个月一共有多少天
    let dayInMonth = this.daysInMonth(month, year)
    // 每个月的最后一天
    let lastDay = new Date(year, month, dayInMonth)
    // 最后一天星期几
    let lastDayWeekDay = lastDay.getDay()
    let newData = []

    // 前面的补零
    for (let i = 1; i < firstWeekDay; i++) {
      newData.push(' ')
    }

    for (let j = 1; j <= dayInMonth; j++) {
      newData.push(j)
    }

    // 后面的补零
    for (let k = 0; k < 7 - lastDayWeekDay; k++) {
      newData.push('  ')
    }

    // 所有的数字组成数组
    this.setState({
      newDatas: newData
    })
  }

  daysInMonth = () => {
    // new Date()第3个参数默认为1，就是每个月的1号，把它设置为0时， new Date()会返回上一个月的最后一天
    const { year, month } = this.state
    return new Date(year, month + 1, 0).getDate()
  }

  chooseYear = value => {
    this.setState(
      {
        year: value,
        showYear: false
      },
      () => {
        this.getFullDay()
      }
    )
  }

  chooseMonth = value => {
    this.setState(
      {
        month: value,
        showMonth: false
      },
      () => {
        this.getFullDay()
      }
    )
  }

  showYear = () => {
    const { yearList, year } = this.state
    this.setState(
      {
        showYear: true
      },
      () => {
        document.querySelector('.all-year').scrollTop =
          (year - yearList[0]) * 100
      }
    )
  }

  showMonth = () => {
    this.setState({
      showMonth: true
    })
  }

  backToday = () => {
    const { nowYear, nowMonth } = this.state
    this.setState(
      {
        year: nowYear,
        month: nowMonth
      },
      () => {
        this.getFullDay()
      }
    )
  }

  render() {
    const {
      newDatas,
      yearList,
      year,
      showYear,
      month,
      showMonth,
      monthList,
      today,
      nowYear,
      nowMonth
    } = this.state
    return (
      <div className="calender-wrap">
        <div className="header">
          <div className="header-box year">
            <div onClick={this.showYear}>{year}年 ></div>

            {showYear && (
              <div className="all-year">
                {yearList.map(item => {
                  return (
                    <div
                      onClick={() => this.chooseYear(item)}
                      // className="year-list"
                      className={classNames(
                        'year-list',
                        item === year ? 'activeYear' : ''
                      )}
                    >
                      {item}
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          <div className="header-box month">
            <div onClick={this.showMonth}>{month + 1}月 ></div>
            {showMonth && (
              <div className="all-month">
                {monthList.map(item => {
                  return (
                    <div
                      onClick={() => this.chooseMonth(item)}
                      className={classNames(
                        'month-list',
                        item === month ? 'activeMonth' : ''
                      )}
                    >
                      {item + 1}月
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          <div onClick={this.backToday} className="header-box backToday">
            返回今天
          </div>
        </div>
        <div className="box-wrap">
          <div className="box">一</div>
          <div className="box">二</div>
          <div className="box">三</div>
          <div className="box">四</div>
          <div className="box">五</div>
          <div className="box">六</div>
          <div className="box">日</div>
          {newDatas.map(item => {
            return (
              <div
                className={classNames(
                  'box',
                  today === item && nowMonth === month && nowYear === year
                    ? 'activeDay'
                    : ''
                )}
              >
                {item}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
