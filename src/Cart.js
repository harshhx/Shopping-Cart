import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {

                    price: 99,
                    title: 'Watch',
                    qty: 2,
                    img: '',
                    id: 1

                },
                {
                    price: 9999,
                    title: 'Mobile Phone',
                    qty: 1,
                    img: '',
                    id: 2
                },
                {
                    price: 9,
                    title: 'Pen',
                    qty: 5,
                    img: '',
                    id: 3
                }
            ]
        }
    }

    handleIncreaseQuantity = (product) =>{

        const {products} = this.state;
        const index = products.indexOf(product)
        products[index].qty += 1;
        this.setState({
            products
        })
    }

    handleDecreaseQuantity = (product) =>{

        const {products} = this.state;
        const index = products.indexOf(product)
        products[index].qty -= 1;
        this.setState({
            products
        })
    }

    render() {
        const {products} = this.state;
        return (
            <div className={"cart"}>

                {products.map((product) => {
                    return (
                        <CartItem
                            product={product}
                            key={product.id}
                            onIncreaseQuantity = {this.handleIncreaseQuantity}
                            onDecreaseQuantity = {this.handleDecreaseQuantity}
                        />
                    )
                })}
            </div>

        );
    }
}

export default Cart;