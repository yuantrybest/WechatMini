// pages/home/index.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    timeout: null,
    memo: [],
    time: []
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
    this.setData({
      timeout: setInterval(() => {
        if (wx.getStorageSync('userId')) {
          this.getList()
          clearInterval(this.data.timeout)
        }
      }, 500)
    })
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
  // 获取列表
  getList() {
    app.http('/api/getList', 'get').then(res => {
      if (res.status === 200) {
        let memo = res.data.memo
        memo.map(e => {
          e.time = e.time.split(' ')[0]
        })
        let time = res.data.time
        time.map(e => {
          if (e.type === '1') {
            e.time = e.time.split(' ')[0]
            e.days = e.days = Math.floor(Math.floor(Math.abs(Date.parse(new Date()) - Date.parse(e.time.replace(/-/g, '/') + ' 00:00:00'))) / (24 * 3600 * 1000))
          } else {
            e.time = e.time.split(' ')[0]
            e.days = e.days = Math.floor(Math.floor(Math.abs(Date.parse(e.time.replace(/-/g, '/') + ' 00:00:00') - Date.parse(new Date()))) / (24 * 3600 * 1000))
          }
        })
        this.setData({
          memo,
          time
        })
      } else {
        wx.showToast({
          title: res.message,
          icon: 'none'
        })
      }
    })
  },
  // 足迹
  bClick() {
    wx.navigateTo({
      url: '/pages/subject/memo',
    })
  },
  // 时光机
  sClick() {
    wx.navigateTo({
      url: '/pages/subject/time',
    })
  }
})