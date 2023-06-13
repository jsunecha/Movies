import axios from 'axios';

export default axios.create({
<<<<<<< HEAD
    baseURL: 'http://localhost:8080',
    headers: {"skip-browswer-warning": "true"}
})
=======
    baseURL: 'localhost:8080',
    headers: {"skip-browswer-warning": "true"}
})

// export default axios.create({
//     baseURL: 'https://9c96-103-106-239-104.ap.ngrok.io',
//     headers: {"ngrok-skip-browswer-warning": "true"}
// })
>>>>>>> 2aac15faf4fd6e58e743b099f33e5e1820dbabe1
