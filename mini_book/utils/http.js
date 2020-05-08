// const BASE_URL = 'https://mini.mguo.xin'
const BASE_URL = 'http://192.168.0.101:8088'

module.exports = (url, method = "GET", data) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: BASE_URL + url,
      method,
      data,
      header: {
        userid: wx.getStorageSync('userId')
      },
      dataType: 'json',
      success: res => {
        if (res.statusCode === 200) {
          resolve(res.data)
        } else {
          reject
        }
      },
      fail: reject
    })
  })
}