// pages/user/index.js
import Dialog from '../../components/dialog/dialog';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: null
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
      info: wx.getStorageSync('userInfo')
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
  // 系统公告
  clickInfo() {
    wx.navigateTo({
      url: '/pages/system/notice',
    })
  },
  // 建议
  clickNew() {
    wx.navigateTo({
      url: '/pages/system/new',
    })
  },
  // 分享
  shareClick() {
    Dialog.alert({
      message: '功能维护中'
    })
  },
  // 足迹
  memoClick() {
    wx.navigateTo({
      url: '/pages/subject/memo',
    })
  },
  // 时光机
  timeClick() {
    wx.navigateTo({
      url: '/pages/subject/time',
    })
  }
})