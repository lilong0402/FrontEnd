// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courses: [
      {
        courseId: 0,
        courseClass: '软件2242 Web2班',
        courseName: '后端工程开发',
        courseNo: '2942577',
        courseCover: './static/springboot.jpg',
        courseTeacher: {
          name: '许莫淇',
          avatar: './static/me.jpg'
        },
        iconfont:{
          qd: './static/qd.png',
          qiangda: './static/qiangda.png',
          js: './static/js.png'
        },
        semester: '2022-2023-2',
        show: false,
        finished: false,
      },
      {
        courseId: 1,
        courseClass: '软件2242 Web2班',
        courseName: '前端工程开发',
        courseNo: '9488275',
        courseCover: './static/vue.jpg',
        courseTeacher: {
          name: '许莫淇',
          avatar: './static/me.jpg'
        },
        iconfont:{
          qd: './static/qd.png',
          qiangda: './static/qiangda.png',
          js: './static/js.png'
        },
        semester: '2022-2023-2',
        show: false,
        finished: false,
      },
      {
        courseId: 2,
        courseClass: '软件2242 Web2班',
        courseName: 'Web 应用开发',
        courseNo: '8175074',
        courseCover: './static/web.jpg',
        courseTeacher: {
          name: '许莫淇',
          avatar: './static/me.jpg'
        },
        iconfont:{
          qd: './static/qd.png',
          qiangda: './static/qiangda.png',
          js: './static/js.png'
        },
        semester: '2022-2023-2',
        show: false,
        finished: false,
      },
      {
        courseId: 3,
        courseClass: '软件2242 Web2班',
        courseName: 'Java程序设计',
        courseNo: '2942533',
        courseCover: './static/java.jpg',
        courseTeacher: {
          name: '许莫淇',
          avatar: './static/me.jpg'
        },
        iconfont:{
          qd: './static/qd.png',
          qiangda: './static/qiangda.png',
          js: './static/js.png'
        },
        semester: '2022-2022-2',
        show: false,
        finished: false,
      },]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})