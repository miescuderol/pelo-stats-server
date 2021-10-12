import axios from 'axios';
import express from 'express';
// import cors from 'cors';
export const router = express.Router();

const PELOTON_BASE_URL = 'https://api.onepeloton.com/';
const USER_API = 'api/user/';

router.post('/auth', (req, res) => {
    axios.post(`${PELOTON_BASE_URL}auth/login`, req.body)
    .then(response => 
        res.send(response.data)
    )
})

router.get('/user/:userId/workouts', (request, response) => {
    axios.get(`${PELOTON_BASE_URL}${USER_API}${request.params.userId}/workouts`, {
        headers: {
            accept: 'application/json',
            cookie: request.header('authorization'),
            'peloton-platform': 'web',
        },
        params: {
            joins: 'ride',
            limit: 10,
            page: 0
        }
    }).then((pelotonResponse => {
        response.send(pelotonResponse.data)
    }))
})
