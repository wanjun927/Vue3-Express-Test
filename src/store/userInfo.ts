const userInfo = {
  namespaced: true,
  state: {
    token:localStorage.getItem('token') ? localStorage.getItem('token'):''
  },
  getters:{    // 监听数据变化的
		getStorage(state: { token: any; }){   // 获取本地存储的登录信息
	      if(!state.token){
	        state.token =JSON.parse(localStorage.getItem('token') || '0')
	      }
	      return state.token
	    }
	},
	mutations:{
		$_setToken(state: { token: any; }, value: string) { // 设置存储token
	    state.token = value;
	    localStorage.setItem('token', value);
	  },
	  $_removeStorage(state: any, value: any){  // 删除token
		  localStorage.removeItem('token');
	  },
	}
}

export default userInfo

