// pages/system/new.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: null
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
  okClick({detail}) {
    this.setData({
      text: detail.value
    })
  },
  // 保存建议
  saveClick() {
    if (!this.data.text) {
      return wx.showToast({
        title: '建议不能为空',
        icon: 'none'
      })
    }
    wx.showLoading({
      title: '提交中',
    })
    app.http('/api/saveMark', 'post', {text: this.data.text}).then(res => {
      wx.hideLoading()
      if (res.status === 200) {
        wx.showToast({
          title: '提交成功',
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
  }
})