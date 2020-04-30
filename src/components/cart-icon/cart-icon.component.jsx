import React from 'react'
import './cart-icon.styles.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {connect} from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'


const CartIcon = ({toggleCartHidden, cartItems}) => (
    <div className="cart-icon" onClick={ toggleCartHidden }>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">
            {   cartItems.length > 0
                ? cartItems
                    .map(currentItem => currentItem.quantity)
                    .reduce((acc, cur) => acc + cur)
                : 0
            }
        </span>
    </div>
)

const mapStateToProps = ({cart:{cartItems}}) => ({
    cartItems
})

const mapDispatchToProps = dispatch => (
    {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)