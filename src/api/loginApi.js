/*
 * @Author: Mia
 * @Date: 2021-10-14 16:53:02
 * @Description: 
 */
import { get, post } from './http';


const loginApi = {
  login: (params) => get('/api/user/login', params),
  register: (data) => post('/api/user/register', data)
}


export default loginApi