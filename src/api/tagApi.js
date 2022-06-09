import {get, post}  from './http'

const tagApi = {
  createTag: (data) => post('/api/tag/createTag', data),
  getTagList: () => get('/api/tag/getTagList'),
  deletTag: (data) => post('/api/tag/deleteTag', data)
}

export default tagApi