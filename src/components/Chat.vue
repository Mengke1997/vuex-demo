<template>
    <div class="wrap">
        <h6></h6>
        <div class="content">
            <div class="left">
                <ul>
                    <li v-for='(item,idx) in leftNews' :key=idx @click='tabChange(idx)' :class=" [($store.state.chat.tab == idx)?'active':'']">
                        <p>
                            <span>{{item.name}}</span>
                            <span>{{item.time}}</span>
                        </p>
                        <p>
                            {{item.content}}
                        </p>
                    </li>
                </ul>
            </div>
            <div class="right" ref='list'>
                <ul  v-for='(item,idx) in $store.state.chat.news' :key="idx" :class=" [($store.state.chat.tab == idx)?'active':'']">
                    <li v-for="(news,idx2) in item" :key='idx2'>
                        <p>
                            <span>{{news.name}}</span>
                            <span>{{news.time}}</span>
                        </p>
                        <p>
                            {{news.content}}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="text">
            <textarea name="" id="" cols="30" rows="10" @keyup.enter='submit($event)' />
        </div>
    </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex';
export default {
    computed:mapGetters([
        'leftNews'
    ]),
    methods:mapActions([
        'tabChange',
        'submit'
    ]),
    watch:{
        '$store.state.chat.news':function(){
            this.$nextTick(()=>{
                const ul=this.$refs.list;
                ul.scrollTop=ul.scrollHeight;
            })
        }
    }
};
</script>

<style lang="less" scoped>
*{
    padding:0;
    margin:0;
}
.wrap {
  width: 800px;
  height: 700px;
  margin: 0 auto;
  text-align: center;
  h6{
    height:40px;
  }
}
.content {
  width: 100%;
  .left {
    width: 30%;
    float: left;
    border: 1px solid goldenrod;
    height: 500px;
    overflow-y: auto;
    ul{
        li{
            cursor: pointer;
            p:first-child {
                span{
                    font-size: 14px;
                    text-align: left;
                    float: left;
                    color:gold;
                }
                span:last-child{
                    float: right;
                    color:goldenrod;
                }
            }
            p:first-child:after{
                clear:both;
                content:'';
                display: block;
            }
            p{
                padding:0 10px;
                text-align: left;
            }
        }
        li.active{
            background-color:rgb(255, 165, 0);
        }
        li:hover{
            background-color:rgba(255, 165, 0, 0.6);
        }
    }
  }
  .right {
    width:65%;
    float: right;
    border: 1px solid goldenrod;
    height: 500px;
    overflow-y: auto;
    ul{
        list-style:none;
        display: none;
        li{
            width:100%;
            p:first-child {
                span{
                    font-size: 14px;
                    text-align: left;
                    float: left;
                    color:gold;
                }
                span:last-child{
                    float: right;
                    color:goldenrod;
                }
            }
            p:first-child:after{
                clear:both;
                content:'';
                display: block;
            }
            p{
                padding:10px;
                text-align: left;
            }
        }
    }
    ul.active{
        display: block;
    }
  }
}
.text{
    width:65%;
    float: right;
    margin-top:20px;
    border:1px solid goldenrod;
    textarea{
        width:90%;
        height:50px;
        padding:5%;
        border:0;
        outline:none;
    }
}
</style>
