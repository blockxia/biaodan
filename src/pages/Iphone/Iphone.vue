<template>
  <div class="login">
    <ReHeader />
    <section>
      <div class="image">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="input">
        <div class="em"><input type="text" placeholder="请输入手机号" v-model="phone"></div>
        <Slider ref="socllor"/>

        <div class="ps">
          <input type="text" :placeholder="pass" v-model="word" @click="isshow">
          <button class="get_verification"
                  :class="{right_phone: rightPhone}"  @click.prevent="getCode"
          >
            {{content}}
          </button>
        </div>
        <!--<section class="login_message">-->
          <!--<input type="text" maxlength="11" placeholder="验证码" v-model="captcha">-->
          <!--<img class="get_verification" src="http://localhost:3000/captcha" alt="captcha" @click="changeCaptcha">-->
        <!--</section>-->

      </div>
      <div :class="isShow?'emg':'succ'">{{alertText}}</div>
      <div class="ac">
        <span class="left">遇到问题</span>
        <span class="right">使用密码验证登录</span>
      </div>
      <div class="loginng">
        <div class="iphone" @click="gotos('/personage')">
          <i></i>登录</div>
        <div class="email" @click="goto('/login')">
          <i></i>其他方式登录</div>
      </div>
      <div class="btn">
        注册账号
        <i class="btn_from"></i>
      </div>
    </section>



  </div>
</template>

<script>
  import ReHeader from '../../components/ReHeader/ReHeader.vue'
  import Slider from '../../components/Slider/Slider.vue'
  import {reqSendCode} from '../../api'


  export default {
    data(){
      return{
        phone:'',
        captcha: '',
        computeTime:0,
        isShow:false,
        alertText:'',
        content:'获取验证码',
        pass:'请输入短信验证码',
        word:'',
        intervalId:''
      }
    },
    computed: {
      rightPhone () {// 以1开头的11数字
        return /^1\d{10}$/.test(this.phone)
      }
    },
    methods:{
      isshow(){
        this.isShow=false
      },
      gotos(path){
        console.log(this.word,this.pass)
        if (this.rightPhone){
          if(!this.word){
            this.isShow=true
            this.alertText = '请输入短信验证码'
          }else if(this.word!==this.pass.toString()){
            this.isShow=true
            this.alertText = '短信验证码格式错误'
          }else {
            clearInterval(this.intervalId)
            this.$router.replace(path)

          }

        }else {
          if(this.phone.length){
            this.isShow=true
            this.alertText = '手机号格式错误'
          }else{
            this.isShow=true
            this.alertText = '请输入手机号'
          }

        }
      },
      async getCode () {

          this.isShow=false
          if (this.rightPhone) {
            if(this.$refs.socllor.isDragOk) {
              this.computeTime = 30
              this.intervalId = setInterval(() => {
                this.content = this.computeTime + '秒后重发'
                document.querySelector('.get_verification').style.color = '#888'
                this.computeTime--

                if (this.computeTime <= 0) {
                  this.content = '获取验证码'
                  document.querySelector('.get_verification').style.color = '#333'
                  this.pass = '请输入短信验证码'
                  clearInterval(this.intervalId)
                }
              }, 1000)
              const result = await reqSendCode()
              if (result.code === 1) {
                clearInterval(intervalId)
                this.isShow = true
                this.alertText = result.msg
              } else {
                this.pass = result.data.password
              }
            }else {
            this.isShow=true
            this.alertText = '请滑动验证码'
          }
          }else {
            if(this.phone.length){
              this.isShow=true
              this.alertText = '手机号格式错误'
            }else{
              this.isShow=true
              this.alertText = '请输入手机号'
            }

          }


      },
      goto(path){
        this.$router.push(path)
      },

//      changeCaptcha (event) {
//        event.target.src = 'http://localhost:3000/captcha?time=' + new Date()
//      },
    },

    components: {ReHeader,Slider}
  }
</script>

<style scoped lang="less">
  .login{
    width: 100%;
    height: 100%;
    text-align: center;
    position: relative;
    section{
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      padding-top: 88px;
      box-sizing: border-box;
      background-color: white;
      .succ{
        display: none;
      }
      .emg{
        margin: auto;
        width: 670px;
        margin-top: 10px;
        color: #b4282d;
        font-size: 24px;
        line-height: 40px;
        vertical-align: top;
        text-align: left;
      }
      .image{
        width: 100%;
        margin-top: 56px;
        img {

          width: 192px;
          height: 64px;
        }
      }
      .input{
        width: 670px;
        margin: auto;
        margin-top: 82.5px;
        .em{
          display: flex;
          align-items: center;
          width: 100%;
          height: 92px;
          border-bottom: 1px solid #ddd;
          input{
            box-sizing: border-box;
            height: 43px;
            width: 100%;
            color: #666;
            font-size: 28.5px;
            padding-left: 16.5px;
            outline: none;
          }
        }
        .ps{
          display: flex;
          align-items: center;
          width: 100%;
          height: 92px;
          border-bottom: 1px solid #ddd;
          input{
            outline: none;
            box-sizing: border-box;
            height: 43px;
            width: 60%;
            color: #666;
            font-size: 28.5px;
            padding-left: 16.5px;
          }
          .get_verification{
            float: left;
            margin-left: 70px;
            width: 172.5px;
            height: 56px;
            text-align: center;
            color: #333;
            font-size: 28px;
            background: #fff;
            line-height: 56px;
            border: 1px solid #7F7F7F;
            border-radius: 8px;
          }

        }
      }
      .ac{
        height: 110px;
        width: 670px;
        margin: auto;
        .left{
          display: block;
          height: 100%;
          float: left;
          line-height: 110px;
          color: #666;
        }
        .right{
          height: 100%;
          line-height: 110px;
          color: #333;
          display: block;
          float: right;
        }

      }
      .loginng{
        width: 100%;
        .iphone{
          width: 670px;
          height: 94px;

          border-radius: 4px;
          color: #aaa;
          border: 1px solid #b4282d;
          background-color: #b4282d;
          text-align: center;
          font-size: 28px;
          line-height: 94px;
          margin: auto;
          margin-bottom: 32px;
        }
        .email{
          width: 670px;
          height: 94px;

          border-radius: 4px;
          color: #b4282d;
          border: 1px solid #b4282d;
          background-color: transparent;
          text-align: center;
          font-size: 28px;
          line-height: 94px;
          margin: auto;
          margin-bottom: 32px;
        }



      }
      .btn{
        width: 100%;
        font-size: 28px;
        text-align: center;
        height: 30px;
        color: #333;
        .btn_from{
          display: inline-block;
          vertical-align: middle;
          height: 30px;
          width: 30px;
          background-image: url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-c1ab37e88b.png");
        }
      }
    }


  }

</style>
