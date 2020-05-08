// pages/subject/memo.js
const app = getApp()
const timeUtil = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: null,
    show: false,
    currentDate: new Date().getTime(),
    minDate: new Date().getTime(),
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`;
      } else if (type === 'day') {
        return `${value}日`;
      }
      return value;
    },
    time: null,
    sTime: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 获取值
  okClick({ detail }) {
    this.setData({
      text: detail.value
    })
  },
  // 保存建议
  saveClick() {
    if (!this.data.text) {
      return wx.showToast({
        title: '备忘录不能为空',
        icon: 'none'
      })
    }
    if (!this.data.time) {
      return wx.showToast({
        title: '请选择时间',
        icon: 'none'
      })
    }
    wx.showLoading({
      title: '提交中',
    })
    app.http('/api/saveMemo', 'post',
    { 
      text: this.data.text,
      time: this.data.time
    }
    ).then(res => {
      wx.hideLoading()
      if (res.status === 200) {
        wx.showToast({
          title: '添加成功',
          icon: 'success',
          success: () => {
            setTimeout(() => {
              wx.navigateBack({
                delta: 1
              })
            }, 500)
          }
        })
      } else {
        wx.showToast({
          title: res.message,
          icon: 'none'
        })
      }
    })
  },
  setTime() {
    this.setData({
      show: true
    })
  },
  // 选择时间
  confirm(e) {
    this.setData({
      time: timeUtil.getParmeTime(e.detail),
      sTime: timeUtil.getParmeTime(e.detail).split(' ')[0],
      show: false
    })
  },
  cancel() {
    this.setData({
      show: false
    })
  }
})