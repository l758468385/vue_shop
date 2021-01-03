<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <!-- 登录表单区域 -->
      <el-form
        status-icon
        ref="loginFormRef"
        :rules="loginFormRules"
        :model="loginForm"
        class="login_form"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            prefix-icon="iconfont icon-user"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="loginForm.password"
            prefix-icon="iconfont icon-3702mima"
          ></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="submitForm">登录</el-button>
          <el-button type="info" @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { post } from "../network/request";

export default {
  data() {
    return {
      loginForm: {
        username: "admin", //默认正确的密码，每次输入太麻烦
        password: "123456"
      },
      loginFormRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    resetForm() {
      this.$refs.loginFormRef.resetFields();
    },
    submitForm() {
      this.$refs.loginFormRef.validate(val => {
        if (val) {
          post("/login", this.loginForm).then(res => {
            console.log(res);
            if (res.data.meta.status === 200) {
              console.log("成功");
              this.open2();
              window.sessionStorage.setItem("token", res.data.data.token);
              this.$router.push("/home");
            } else {
              console.log("失败");
              this.open4();
            }
          });
        }
      });
    },
    open2() {
      this.$message({
        showClose: true,
        message: "登录成功",
        type: "success"
      });
    },
    open4() {
      this.$message({
        showClose: true,
        message: "用户名或密码输入错误噢",
        type: "error"
      });
    }
  }
};
</script>




<style lang="Less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.avatar_box {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  /* 内边距加个10px */
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
}
.avatar_box img {
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background-color: #eee;
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;

  padding: 0px 20px 0px 20px;
  /* input默认是 border-content格式的 */
  box-sizing: border-box;
}
.btns {
  display: flex;
  justify-content: flex-end;
}
</style>