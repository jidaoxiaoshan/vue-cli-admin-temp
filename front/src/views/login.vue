<template>
  <div class="login_container" style="width: 350px;margin: 20px auto;">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      label-position="left"
      label-width="80px"
    >
      <el-form-item label="用户名" prop="username">
        <el-input placeholde="请输入用户名" v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password"></el-input>
      </el-form-item>
    </el-form>
    <el-button @click="handleLogin">login</el-button>
  </div>
</template>

<script>
  // import loginApi from "@/api/login"
  import Cookies from "js-cookie";
  // import {getToken, setToken} from "@u/auth";

  export default {
    name: "login",
    data() {
      return {
        loginForm: {
          username: "admin",
          password: "123456",
          rememberMe: false,
        },
        loginRules: {
          username: [
            {required: true, trigger: "blur", message: "用户名不能为空"}
          ],
          password: [
            {required: true, trigger: "blur", message: "密码不能为空"}
          ]
        },
        loading: false,
        redirect: undefined
      }
    },
    watch: {
      $route: {
        handler: function (route) {
          this.redirect = route.query && route.query.redirect;
        },
        immediate: true
      }
    },
    created() {
      this.getCookie();
    },
    methods: {
      getCookie() {
        const username = Cookies.get("username");
        const password = Cookies.get("password");
        const rememberMe = Cookies.get('rememberMe')
        this.loginForm = {
          username: username === undefined ? this.loginForm.username : username,
          password: password === undefined ? this.loginForm.password : password,
          rememberMe: rememberMe === undefined ? false : Boolean(rememberMe)
        };
      },
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true;
            if (this.loginForm.rememberMe) {
              Cookies.set("username", this.loginForm.username, {expires: 30});
              Cookies.set("password", this.loginForm.password, {expires: 30});
              Cookies.set('rememberMe', this.loginForm.rememberMe, {expires: 30});
            } else {
              Cookies.remove("username");
              Cookies.remove("password");
              Cookies.remove('rememberMe');
            }
            this.$store
              .dispatch("Login", this.loginForm)
              .then(() => {
                this.loading = false;
                this.$router.push({path: this.redirect || "/"});
              })
              .catch((err) => {
                this.loading = false;
                if (err !== 403) {
                  this.$router.push(`/${err === 404 ? 404 : 500}`)
                }
              });
          }
        });
      }
    }
  }
</script>

<style scoped>

</style>
