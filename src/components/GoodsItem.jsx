function GoodsItem(props) {
    const { 
        id,
        name, 
        description, 
        price, 
        full_background,
        addToBasket = Function.prototype,
        alwaysBasketShow=Function.prototype
    } = props;

    function onBuyClick() {
        addToBasket({
            id,
            name,
            price,
        })
        alwaysBasketShow()
    }

    return (
        <div className="card" id={id}>
            <div className="card-image">
                <img src={full_background} alt={name} />
                <span className="card-title">{name}</span>
            </div>
            <div className="card-content">
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button 
                    className="btn"
                    onClick={
                        onBuyClick
                    }
                >
                    Купить
                </button>
                <span className="right">{price}</span>
            </div>
        </div>
    );
}

export { GoodsItem };