const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const navigat = (val) => {

  const goUrl = (url) => {
    wx.navigateTo({
      url
    })
  }
  if (val.inspect) {
    //是否登录
    goUrl(val.url)
  } else {
    goUrl(val.url)
  }

}
const setStorageFun = (name, code) => {
  wx.setStorageSync(name, code)
}

const getStorageFun = (name) => {
  return wx.getStorageSync(name)
}

module.exports = {
  formatTime: formatTime,
  navigat: navigat,
  setStorageFun: setStorageFun,
  getStorageFun: getStorageFun,
}
