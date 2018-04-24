const state = {
    goods: [
        { id: 1, name: '小米', price: 1999, num: 10 },
        { id: 2, name: 'iphone8', price: 6999, num: 7 },
        { id: 3, name: 'oppo', price: 2999, num: 5 }
    ],
    cart: [

    ],
    total:0
};

const mutations = {
    // 增加
    add(state,{id,name,price}) {
        state.cart.push({
            id,
            name,
            price,
            quantity:1
        });
    },
    // 添加数量
    addQuantity(stata,{id,price}){
        state.cart.find(cartItem=>cartItem.id===id).quantity++;
    },
    // 减库存
    decrementProductNum(state,{id,price}){
        state.goods.find(cartItem=>cartItem.id===id).num--;
    },
    // 金额变化
    totalChange(state,price){
        state.total+=price;
    },
    checkOut(state){
        const num=state.cart.length;
        alert('您一共买了'+num+'件商品，总金额¥'+state.total);
    },
    // 减少
    decrementCartProduct(state,idx){
        state.cart[idx].quantity--;
    },
    decrementCart(state,idx){
        state.cart.splice(idx);
    },
    addProductNum(state,id){
        state.goods.find(cartItem=>cartItem.id===id).num++;
    }
};

const actions = {
    // 添加
    add:({state,commit},id)=>{
        if(state.goods[id-1].num>0){
            const isExist=state.cart.find(cartItem=>cartItem.id===id);
            if(isExist){
                commit('addQuantity',state.goods[id-1]);
            }else{
                commit('add',state.goods[id-1]);
            }
            //  减库存
            commit('decrementProductNum',state.goods[id-1]);
            // 金额变化
            commit('totalChange',state.goods[id-1].price);
        }
    },
    decrementCartProduct:({state,commit},obj)=>{
        if(state.cart[obj.idx].quantity>1){
            commit('decrementCartProduct',obj.idx);
        }else{
            commit('decrementCart',obj.idx);
        }
        // 增加库存
        commit('addProductNum',obj.id);
        // 金额变化
        commit('totalChange',-(state.goods[obj.id-1].price));
    },
    // 结算
    checkOut:({state,commit})=>{
        if(state.total>0){
            commit('checkOut');
        }else{
            alert('您没有商品结算');
        }
    }
};

const getters = {
    productsList:state=>state.goods,
};

export default {
    state,
    mutations,
    actions,
    getters
};