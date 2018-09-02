<template>
  <div class="login">
    <ReHeader />
    <section>
      <div class="image">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="input">
        <div class="em"><input type="text" placeholder="邮箱账号"
        v-model="email"></div>
        <div class="ps"><input type="text" placeholder="密码"
         v-model="word"></div>
      </div>
      <div :class="isShow?'emg':'succ'">{{alertText}}</div>
      <Slider ref="socllor" v-if="isHidden"/>
      <div class="ac">
        <span class="left">注册账号</span>
        <span class="right">忘记密码</span>
      </div>
      <div class="loginng">
        <div class="iphone" @click="gotos('/personage')">
          <i></i>登录</div>
        <div class="email" @click="goto('/login')">
          <i></i>其他方式登录</div>
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
        email:'',
        isShow:false,
        alertText:'',
        word:'',
        isHidden:false,
        pass:'',

      }
    },

    methods:{
      async gotos(path){
        const result = await reqSendCode()
        this.pass = result.data.password
//        this.isDragOk=this.$refs.socllor.isDragOk!==undefined?this.$refs.socllor.isDragOk:false
       if(this.isHidden){
         if(this.isDragOk){
           if(this.word!==this.pass.toString()){
             this.isShow=true
             this.alertText = '账号或密码错误'
           }else {

             this.$router.replace(path)

           }

         }else{
           this.isShow=true
           this.alertText = '请滑动验证码'
         }

       }else{
         if (this.rightEmail){
           if(!this.word){
             this.isShow=true
             this.alertText = '请输入密码'
           }else if(this.word){
             this.isHidden=true

           }

         }else {
           if(this.email.length){
             this.isShow=true
             this.alertText = '账号格式错误'
           }else{
             this.isShow=true
             this.alertText = '请输入账号'
           }

         }
       }

      },
      goto(path){
        this.$router.push(path)
      }
    },
    computed: {
      isDragOk(){
        return this.$refs.socllor.isDragOk
      },
      rightEmail () {
        return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.email)
      },
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
            box-sizing: border-box;
            height: 43px;
            width: 100%;
            color: #666;
            font-size: 28.5px;
            padding-left: 16.5px;
            outline: none;
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
          color: #666;
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
    }


  }

</style>
