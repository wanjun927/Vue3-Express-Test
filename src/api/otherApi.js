import { get, post } from './http';


const otherApi = {
  getJinrishici: () => get("https://v2.jinrishici.com/one.json"),
  getShanbei:() => get("http://open.iciba.com/dsapi/")
}


export default otherApi
