import {ActionTypes} from "../Contants/action-types";

const initialState = {products: [
        {
            id: 1,
            title: "react",
            category: "programming"
        }
    ]}
export const productReducer = (state = 0, {type,paylaod}) => {

    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state
        break
            return state

    }
}
export default productReducer;
