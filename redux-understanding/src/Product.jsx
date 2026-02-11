import { useDispatch } from "react-redux";
import { addItem } from "./redux/slice";

const Product = () => {

    const dispatch = useDispatch()

    return (
        <div className="product-card">

            <div className="product-image">
                <img
                    src="https://images.unsplash.com/photo-1657223144998-e5aa4fa2db7c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdpcmVsZXNzJTIwaGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D"
                    alt="Product Image"
                />
            </div>

            <div className="product-info">
                <h1>Wireless Headphones</h1>

                <p className="price">$129.99</p>

                <p className="description">
                    Experience high-quality sound with these wireless headphones.
                    Featuring noise cancellation, long-lasting battery life,
                    and a sleek modern design for everyday use.
                </p>

                <button onClick={() => dispatch(addItem(1))} className="btn">Add to Cart</button>
            </div>

        </div>
    );
};

export default Product;
