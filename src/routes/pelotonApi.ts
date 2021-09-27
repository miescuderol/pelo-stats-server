import axios from 'axios';
import express from 'express';
// import cors from 'cors';
export const router = express.Router();

const PELOTON_BASE_URL = 'https://api.onepeloton.com/';

// router.use(cors());
router.post('/auth', (req, res) => {
    axios.post(`${PELOTON_BASE_URL}auth/login`, req.body).then(response => res.send(response.data))

})


