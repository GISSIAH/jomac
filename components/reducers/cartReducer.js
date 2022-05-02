import axios from 'axios'
import { ADD_TO_CART, REMOVE_ITEM, ADD_QUANTITY } from '../actions/cartActionsTypes'



const initState = {
    items: [],
    addedItems: [],
    total: 0

}
const cartReducer = (state = initState, action) => {
    axios.get("https://alpha-jomac.herokuapp.com/product/all").then(res => {
        //INSIDE HOME COMPONENT
        initState.items=res.data
        if (action.type === ADD_TO_CART) {
            let addedItem = state.items.find(item => item._id === action.id)
            //check if the action id exists in the addedItems
            let existed_item = state.addedItems.find(item => action.id === item._id)
            if (existed_item) {
                addedItem.quantity += 1
                return {
                    ...state,
                    total: state.total + addedItem.price
                }
            }
            else {
                addedItem.quantity = 1;
                console.log(addedItem);
                //calculating the total
                let newTotal = state.total + addedItem.price

                return {
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    total: newTotal
                }

            }
        }
        if (action.type === REMOVE_ITEM) {
            let itemToRemove = state.addedItems.find(item => action.id === item.id)
            let new_items = state.addedItems.filter(item => action.id !== item.id)

            //calculating the total
            let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
            console.log(itemToRemove)
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        //INSIDE CART COMPONENT
        if (action.type === ADD_QUANTITY) {
            let addedItem = state.items.find(item => item.id === action.id)
            addedItem.quantity += 1
            let newTotal = state.total + addedItem.price
            return {
                ...state,
                total: newTotal
            }
        }
        else {
            return state
        }
    }).catch(err => {
        alert("an error occured")
        console.log(err);
    })


}

export default cartReducer