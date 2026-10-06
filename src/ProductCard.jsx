function ProductCard(props) {
    return (
        <div className="product-card">
            <img
                className="product-image"
                src={props.image}
                alt={props.name}
            />
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <button>Add to chart</button>
            <button>Buy Now</button>
        </div>
    );
}

export default ProductCard;