import { BasketItem } from "./basketItem";

function BasketList(props) {
    const { 
        order = [], 
        handleBasketShow = Function.prototype, 
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);

    return (
        <div className="collection">
            <span className="collection-item active">Корзина</span>
            <div className="orders">
                {order.length ? (
                    order.map((item) => (
                        <BasketItem 
                            key={item.id} 
                            removeFromBasket={removeFromBasket}
                            incQuantity={incQuantity}
                            decQuantity={decQuantity}
                            {...item} 
                        /> 
                    ))
                ) : (
                    <span className="collection-item ">Корзина пуста</span>
                )}
            </div>
            <span className="collection-item active">
                Общая стоимость заказа: {totalPrice} руб.
            </span>
            <i class="material-icons basket-clear" onClick={handleBasketShow}>
                clear
            </i>
        </div>
    );
}

export { BasketList };