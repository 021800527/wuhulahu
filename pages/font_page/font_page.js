// pages/font_page/font_page.js
const jinrishici = require('../../utils/jinrishici.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    jinrishici:'',
    flag:true
  },
  // 获取用户信息成功与否来擦除按钮
  test:function(){
    var that = this
    wx.getUserInfo({
      success:function(res){
        that.setData({
          flag : false
        }),
        wx.navigateTo({
          url: '../index/index',
        })
      },
      fail:function(){
        console.log('refuse')
      }
    })
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
    let that = this
    wx.getUserInfo({
      success:function(res){
        that.setData({
          flag : false
        })
        setTimeout(function(){
          wx.navigateTo({
            url: '../index/index',
          })
        },2000)
      },
      fail:function(res){
        that.setData({
          flag : true
        })
      }
    })
    wx.getSetting({
      withSubscriptions: true,
      success:function(res){
        if (res.authSetting['scope.userInfo'] === false) {
          wx.login({
            success:res=>{
              wx.request({
               // 自行补上自己的 APPID 和 SECRET
               method:'POST',
               url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx7baf43318101b003&secret=b9858b4fc34320141767e0f4a1d7d0b7&js_code=' + res.code + '&grant_type=authorization_code',
                success: res => {
                // 获取到用户的 openid
                }
                })
                }
              })
        }
      }
    })
    jinrishici.load(result => {
      // 下面是处理逻辑示例
      this.setData({"jinrishici": result.data.content})
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.hideHomeButton();
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

  }
})