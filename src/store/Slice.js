import {createSlice} from "@reduxjs/toolkit";

const AppSlice = createSlice({
    name: "App",
    initialState:{
        users: {
            vendors:[],
            buyers: []
        },
        loginInfo:{
            isLoggedIn: false,
            loggedInUser:{}
        },
        foodCart:[]
    },
    reducers:{
        signUp:(state, {payload})=>{
            if(payload.role === "vendor"){
                state.users.vendors.push(payload)
            }else{
                state.users.buyers.push(payload)
            }
        },
        vendorLogin: (state, {payload})=>{
            const checkVendor = state.users.vendors.findIndex((e)=> e.email === payload.email)

            if(checkVendor !== -1 ){
                if(state.users.vendors[checkVendor].password !== payload.password){
                    throw new Error("Password incorrect");
                }else{
                    state.loginInfo.isLoggedIn = true;
                    state.loginInfo.loggedInUser = payload;
                }
            }else{
                throw new Error("User not found check email")
            }
        },
        buyerLogin: (state, {payload})=>{
            const checkVendor = state.users.buyers.findIndex((e)=> e.email === payload.email)

            if(checkVendor !== -1 ){
                if(state.users.buyers[checkVendor].password !== payload.password){
                    throw new Error("Password incorrect")
                }else{
                    state.loginInfo.isLoggedIn = true;
                    state.loginInfo.loggedInUser = payload;
                }
            }else{
                throw new Error("User not found check email")
            }
        },
        addToCart: (state, {payload})=>{
            const check = state.foodCart.findIndex((e)=> e.id == payload.id);
            if(check === -1){
                state.cart.push({...payload, QTY: 1})
                state.total = state.foodCart.reduce((p, e)=> p + (e.QTY * e.price), 0)
            }else{
                let value = state.foodCart[check];
                value.QTY += 1;
                state.total = state.foodCart.reduce((p, e)=> p + (e.QTY * e.price), 0)
            }
        },
        clearCart: (state)=>{
            state.foodCart = []
        },
    }
})

export const {signUp, vendorLogin, buyerLogin, addToCart, clearCart} = AppSlice.actions;
export default AppSlice.reducer