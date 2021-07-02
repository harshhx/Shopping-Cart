import React from 'react';
import Cart from "./Cart";
import Navbar from "./Navbar";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {

                    price: 500,
                    title: 'Watch',
                    qty: 2,
                    img: 'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=381&q=80',
                    id: 1

                },
                {
                    price: 10000,
                    title: 'Mobile Phone',
                    qty: 1,
                    img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
                    id: 2
                },
                {
                    price: 15,
                    title: 'Pen',
                    qty: 5,
                    img: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
                    id: 3
                }
            ]
        }
    }

    handleIncreaseQuantity = (product) => {

        const {products} = this.state;
        const index = products.indexOf(product)
        products[index].qty += 1;
        this.setState({
            products
        })
    }

    handleDecreaseQuantity = (product) => {

        const {products} = this.state;
        const index = products.indexOf(product)
        if (products[index].qty === 0) {
            return;
        }
        products[index].qty -= 1;
        this.setState({
            products
        })
    }

    handleDeleteProduct = (id) => {
        const {products} = this.state;
        const items = products.filter((item) => item.id !== id);

        this.setState({
            products: items
        })
    }
    getCartCount = () => {
        const {products} = this.state;
        let count = 0
        products.forEach((product) => {
            count += product.qty
        });
        return count;
    }

    getCartTotal = () => {
        const {products} = this.state;
        let Total = 0
        products.forEach((product) => {
            Total += product.qty * product.price
        });
        return Total;
    }

    render() {
        const {products} = this.state;
        return (
            <div className="App">
                <Navbar count={this.getCartCount()}/>
                <Cart
                    products={products}
                    key={products.id}
                    onIncreaseQuantity={this.handleIncreaseQuantity}
                    onDecreaseQuantity={this.handleDecreaseQuantity}
                    onDeleteProduct={this.handleDeleteProduct}
                />
                <div style={{padding:10, fontSize: 20}}><h3>TOTAL: {this.getCartTotal()}</h3></div>
            </div>
        );
    }
}


export default App;
