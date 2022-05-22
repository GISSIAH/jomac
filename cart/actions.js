export function addToCart(product){
    if (typeof window !== 'undefined') {
        //check if cart exists
        const cart = localStorage.getItem("cart")
        console.log(cart);
        if(cart != null  ){
            const cartObj = JSON.parse(cart)
            const productExists = cartObj.cartItems.find((item) => item.id === product.id);
            if(productExists){
                productExists.quantity ++
            }else{
                cartObj.cartItems.push(product)
            }
            localStorage.setItem('cart',JSON.stringify(cartObj))
        }else{
            const newCartObj = {
                cartItems:[product]
            }
            localStorage.setItem('cart',JSON.stringify(newCartObj))
        }

      } 
}


export function removeFromCart(product){
    if (typeof window !== 'undefined') {

        //check if cart exists
        const cart = localStorage.getItem("cart")
        const jsonCart = JSON.parse(cart)
        for (var i = 0; i < jsonCart.cartItems.length; i++) {
            if (jsonCart[i].name === product.name) {
                var spliced = jsonCart.cartItems.splice(i, 1);
                console.log(spliced);
            }
        }
        localStorage.setItem('cart',JSON.stringify(jsonCart))
        

      } 
}

export function getCart(){
    if (typeof window !== 'undefined') {
        const cart = localStorage.getItem('cart')

        return JSON.parse(cart)
    }
}