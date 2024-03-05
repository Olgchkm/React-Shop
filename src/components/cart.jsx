function Cart(props) {
    const { quantity = 0, handleBasketShow = Function.prototype } = props;
    return (
        <div className="cart teal white-text darken-3" onClick={handleBasketShow}>
            <i class="material-icons teal darken-3">shopping_basket</i>
            {quantity ? <span className="cart-quantity">{quantity}</span> :null}
        </div>
    );
}

export { Cart };