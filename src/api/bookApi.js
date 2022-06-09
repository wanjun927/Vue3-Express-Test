/*
 * @Author: Mia
 * @Date: 2021-10-29 17:31:37
 * @Description:
 */
import { get, post } from './http'

const bookApi = {
  createBook: (body) => post('/api/book/createBook', body),
  getBooksInfo: () => get('/api/book/getAllBooksInfo'),
  getBookDetail: (params) => get('/api/book/getInfo', params),
  deleteBook: (data) => post('/api/book/deleteBook', data),
  updateBook: (data) => post('/api/book/updateBook', data),
}

export default bookApi
