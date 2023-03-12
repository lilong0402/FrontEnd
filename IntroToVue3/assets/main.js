// const product='Socks'

const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './images/socks_green.jpg',
            inStock: true ,
            button : 0,
            counts : [
                {
                    id : 1,
                    courtName: '后端工程化开发',
                    className : '软件2232',
                    classId: 12121,
                    Time : '2022-2023-2',
                    image : './images/onejpeg.jpeg',
                },
                {
                    id : 2,
                    courtName: '前端工程化开发',
                    className : '软件2232',
                    classId: 12122,
                    Time : "2022-2023-2",
                    image : './images/twojpg.jpg',
                },
                {
                    id : 3,
                    courtName: 'web应用开发',
                    className : '软件2232',
                    classId: 12123,
                    Time : '2022-2023-2',
                    image : './images/threejpeg.jpeg',
                }
            ]
            // url:''

        }
    }
})