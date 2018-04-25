<template>
  <div>
      <h1>商品</h1>
      <ul>
          <li v-for='(item,idx) in productsList' :key=idx>
              <p>商品名：{{item.name}},价格：{{item.price}},库存：{{item.num}}</p>
              <button @click='add(item.id)' :disabled="item.num>0?false:true">购买</button>
          </li>
      </ul>
      <hr>
      <h2>购物车</h2>
        <ul>
            <li v-for='(item,idx) in $store.state.shopping.cart' :key=idx>
               <p>商品名：{{item.name}},价格：￥{{item.price}},数量：
                   <button @click='decrementCartProduct({idx:idx,id:item.id})'>-</button>  {{item.quantity}}  
                   <button @click='add(item.id)'>+</button>
                </p>          
            </li>
        </ul>
        <hr>
        总金额：{{$store.state.shopping.total}}
        <button @click='checkOut'>结算</button>
  </div>
</template>
<script>
    
import { mapGetters, mapActions } from 'vuex';

export default {
    computed:mapGetters([
        'productsList',
    ]),
    methods:mapActions([
        'add',
        'checkOut',
        'decrementCartProduct'
    ])
};
</script>
<style scope>
    ul{
        list-style:none;
    }
</style>

