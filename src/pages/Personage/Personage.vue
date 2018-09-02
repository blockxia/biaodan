<template>
  <section>
    <div class="personage" >
      <header>
        <div class="left">
          <img class="avatar" src="http://thirdqq.qlogo.cn/qqapp/101330628/985B18D4BE50D49E863839CFFA1FD240/100" >
          <div>
            <p>丶Mr.Ma</p>
            <div>普通用户</div>
          </div>
        </div>
        <div class="right">
          <div class="content">
            <i></i>
            <div class="huiyuan">
              <div class="one">超级会员</div>
              <div class="two">立即试用<i></i></div>
            </div>
          </div>

        </div>
      </header>
      <div class="list" >
        <ul>
          <li v-for="(item,index) in pref">
            <a href="">
              <i :style="`background-image: url(${item.banner});background-position: 0 ${item.y}px;`"></i>
              <span>{{item.content}}</span>
            </a>
          </li>
        </ul>
      </div>
      <mt-button type="default"
                 class="mt-button"
                 @click="logout">退出登录</mt-button>
    </div>
    <div class="zhe">
      <div class="tanchuan">
        <div class="header">退出登录</div>
        <div>
          <span class="left" @click="quxiao">取消</span>
          <span class="right" @click="tuichu">确定</span>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
  import Vue from 'vue'
  import { Button } from 'mint-ui';
  import { MessageBox } from 'mint-ui';
  import {mapState} from 'vuex'

  Vue.component(Button.name, Button);

  export default {
    data(){
      return{
        name:'',
      }
    },



    methods:{

        logout () {
          document.querySelector('.zhe').style.display='block'

        },
      quxiao(){
          document.querySelector('.zhe').style.display='none'
      },
      tuichu(){
        this.$router.replace('/login')
      },

      handleClick(){
//        MessageBox({
//          message: '确定执行此操作?',
//          showConfirmButton: true,
//          showCancelButton:true
//        });
      }
    },
    mounted(){
      this.$store.dispatch('getPref')
    },
    computed:{
      ...mapState(['pref']),

    },

    components: {}
  }
</script>

<style scoped lang="less">
  section{
    width: 100%;
    height: 100%;
    .personage{
      .guide_item{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
      }
      width: 100%;
      margin-bottom: 98px;
      header{
        box-sizing: border-box;
        width: 100%;
        height: 270px;
        /*background-image: url(//yanxuan.nosdn.127.net/d069279….png);*/
        background-size: 100%;
        background-position: bottom center;
        padding-left: 30px;
        overflow: hidden;
        background-color:#c1a66a;
        display: flex;
        .left{
          width: 510px;
          height: 270px;
          float: left;
          display: flex;
          align-items: center;
          img {
            height: 142px;
            width: 142px;
            border-radius: 50%;
          }
          div{
            margin-left: 30px;
            p{
              color: #fff;
              font-size: 36px;
              line-height: 1.2;
              text-align: left;
              margin-bottom: 10px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }
            div{
              margin-left: 0;
              color: white;
              font-size: 28px;
              text-align: left;

            }
          }
        }
        .right{
          width: 210px;
          height: 270px;
          display: flex;
          align-items: center;
          .content{
            margin-left: 7px;
            width: 203px;
            height: 84px;
            background: #444;
            border-bottom-left-radius: 42px;
            border-top-left-radius: 42px;
            display: flex;
            align-items: center;
            i{
              margin: 0 9px;
              border-radius: 50%;
              width: 56px;
              height: 56px;
              background-repeat: no-repeat;
              display: inline-block;
              vertical-align: middle;
              background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/ucenter-s806722d5cc-579805790e.png);
              background-position: 0 -168px;

            }
            .huiyuan{
              width: 104px;
              height: 83px;
              display: flex;
              flex-direction:column ;
              color: #EDE7DB;
              align-items: center;
              .one{
                font-size: 26px;
                margin-top: 10px;

              }
              .two{
                margin-top: 10px;
                font-size: 20px;
                white-space: nowrap;
                i{
                  width: 18px;
                  height: 18px;
                  display: inline-block;
                  vertical-align: middle;
                  background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/ucenter-s806722d5cc-579805790e.png);
                  background-repeat: no-repeat;

                }
              }

            }
          }
        }
      }
      .list{
        background-color: white;
        overflow: hidden;
        ul{
          font-size: 0;
          li{
            box-sizing: border-box;
            width: 250px;
            display: inline-block;
            height: 178px;
            border: 1px solid #eee;
            a{
              display: flex;
              flex-direction: column;
              align-items: center;
              i{
                margin-top: 40px;
                display: inline-block;

                width: 50px;
                height: 50px;
                vertical-align: middle;
                margin-bottom: 16px;
                /*background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/ucenter-s806722d5cc-579805790e.png);*/
                background-repeat: no-repeat;


              }
              span{
                display: block;
                font-size: 24px;
                line-height: 1;
                color: #333;
              }
            }
          }
        }
      }
      .mt-button{
        width: 100%;
        height: 96px;
        margin: 30px 0 20px;
        background-color: white;
        border: none;
        color: #333;
        font-size: 28px;
      }

    }
    .zhe{
      display: none;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
      background-color: rgba(0,0,0,0.3);

      .tanchuan{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 630px;
        height: 305px;
        background-color: rgba(255,255,255,1);
        opacity: 1;
        .header{
          height: 200px;
          width: 100%;
          line-height: 200px;
          text-align: center;
          border-bottom: 1px solid #ddd;
          font-size: 32px;
          color: #333;
        }
        div{
          .left{
            display: inline-block;
            height: 104px;
            width: 310px;
            border-right: 1px solid #ddd;
            font-size: 28px;
            line-height: 104px;
            text-align: center;
          }

          .right{
            display: inline-block;
            color: #b4282d;
            height: 104px;
            width: 310px;
            font-size: 28px;
            line-height: 104px;
            text-align: center;
          }
        }
      }
    }
  }

</style>
