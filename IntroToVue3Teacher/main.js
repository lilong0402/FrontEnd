const app = Vue.createApp({
  data() {
    return {
      show: true,
      courses: [
        {
          courseId: 0,
          courseClass: '软件2242 Web2班',
          courseName: '后端工程开发',
          courseNo: '2942577',
          courseCover: './assets/images/springboot.jpg',
          courseTeacher: {
            name: '许莫淇',
            avatar: './assets/images/me.jpg'
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
          courseCover: './assets/images/vue.jpg',
          courseTeacher: {
            name: '许莫淇',
            avatar: './assets/images/me.jpg'
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
          courseCover: './assets/images/web.jpg',
          courseTeacher: {
            name: '许莫淇',
            avatar: './assets/images/me.jpg'
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
          courseCover: './assets/images/java.jpg',
          courseTeacher: {
            name: '许莫淇',
            avatar: './assets/images/me.jpg'
          },
          semester: '2022-2022-2',
          show: false,
          finished: false,
        },
      ]
    }
  },
  methods: {
    change(course){
      course.show=!course.show
    },
    change2(course){
      course.show=true;
    },
    change3(course){
      course.show=false;
    },
    deleteL(index){
      this.courses.splice(index,1)
    }
  }
})