export function addToCart(product){
    if (typeof window !== 'undefined') {

        //check if cart exists
        const cart = localStorage.getItem("cart")
        if(cart != null ){
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

export function getCart(){
    if (typeof window !== 'undefined') {
        const cart = localStorage.getItem('cart')

        return JSON.parse(cart)
    }
}