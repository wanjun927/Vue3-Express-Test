<!--
 * @Author: Mia
 * @Date: 2021-10-14 14:55:41
 * @LastEditors: Mia
 * @LastEditTime: 2021-12-23 17:09:41
 * @Description: 
-->
<template>
  <div class="login-container">
    <h1>登录</h1>
    <a-form ref="loginRef" :rules="rules" :model="formdata" borred>
      <a-form-item label="账户" name="name">
        <a-input v-model:value="formdata.name"></a-input>
      </a-form-item>
      <a-form-item label="密码" name="pwd">
        <a-input v-model:value="formdata.pwd"></a-input>
      </a-form-item>
    </a-form>
    <a-form-item>
      <a-button type="primary" @click="onSubmit">登录</a-button>
      <a-button @click="onRegister">注册</a-button>
    </a-form-item>
  </div>
</template>

<script>
import { ref, reactive, toRaw } from 'vue'
import { message } from 'ant-design-vue';
import { useRouter } from 'vue-router';
import loginApi from '../../api/loginApi'
export default {
  name: "Login",
  setup() {
    const router = useRouter();
    const loginRef = ref()
    const formdata = reactive({
      name: '',
      pwd: undefined,
    })
    const rules = {
      name: [
        {
          required: true,
          message: '请填写账户',
          trigger: 'blur',
        }
      ],
      pwd: [
        {
          required: true,
          message: '请输入密码',
          trigger: 'blur',
        }
      ]
    }

    const onSubmit = () => {
      loginRef.value.validate().then(() => {
        console.log('values', formdata, toRaw(formdata));
        loginApi.login(toRaw(formdata)).then(res => {
          const {code , msg} = res
          if(code === 200) {
            // 将后端传过来的token
            localStorage.setItem('token',res.token)
            router.push("/home")
          } else {
            message.error(msg)
          }
        }).catch(err => {
          console.log('err', err)
        })
      })
      .catch(error => {
        console.log('error', error);
      });
    }

    const onRegister = () => {
      loginRef.value.validate().then(() => {
        loginApi.register(toRaw(formdata)).then((res) => {
          console.log('res', res);
          if(res.code === 200) {
            message.success(res.msg)
          }else if(res.code === 600) {
            message.error(res.msg)
          }
        }).catch(err => {
          console.log('err1212', err)
        })
      }).catch(error => {
        console.log('error', error)
      })
    }

    return {
      rules,
      onSubmit,
      loginRef,
      formdata,
      onRegister
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  width: 400px;
  margin: 0 auto;
}
</style>
