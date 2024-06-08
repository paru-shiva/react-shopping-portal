import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value

      const totalItems = cartList.length

      let totalAmount = 0

      cartList.forEach(
        listItem => (totalAmount += listItem.price * listItem.quantity),
      )

      const showEmptyView = cartList.length === 0
      // TODO: Update the functionality to remove all the items in the cart

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <CartListView />
                {/* TODO: Add your code for Cart Summary here */}
              </div>
            )}

            <div className="cartSummary">
              <h3>{`Order Total: Rs ${totalAmount}/-`}</h3>
              <p>{`${totalItems} items in cart`}</p>
              <button>Checkout</button>
            </div>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
