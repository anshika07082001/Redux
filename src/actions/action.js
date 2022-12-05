import { BUY_CAKE, BUY_CHOCOLATES, BUY_ICECREAM } from "../type/type"

// action creator for buyCake
export const buyCake=(cakeVal)=>{
    return {
        type:BUY_CAKE,
        value:cakeVal
    }
}

// action creator for buyChocolate
export const buyChocolate=(chocolateVal)=>{
    return {
        type:BUY_CHOCOLATES,
        value:chocolateVal        
    }
}

// action creator for buyIcecream
export const buyIcecream=(icecreamVal)=>{
    return {
        type:BUY_ICECREAM,
        value:icecreamVal
    }
}