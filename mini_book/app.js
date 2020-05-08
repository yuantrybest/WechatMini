//app.js
const http = require('/utils/http.js')

App({
  http,
  onLaunch: function () {
    // 获取用户openId
    wx.login({
      success: e => {
        http('/api/getUserInfo', 'post', {code: e.code}).then(res => {
          if (res.status === 200) {
            wx.setStorageSync('userId', res.data.userId)
            wx.setStorageSync('userInfo', res.data)
          } else {
            wx.showToast({
              title: res.message,
              icon: 'none'
            })
          }
        })
      }
    })
  },
  globalData: {
    userInfo: null
  }
})