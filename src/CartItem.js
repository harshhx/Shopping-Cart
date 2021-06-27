import React from 'react' ;

class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: '',
        }
    }

    increaseQty = () => {
        console.log(this.state.qty);
        this.setState({
            qty: this.state.qty + 1
        });
    }

    decreaseQty = () => {
        this.setState({
            qty: this.state.qty - 1
        });
    }

    render() {
        const {price, title, qty} = this.state
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#77'}}>Rs {price}</div>
                    <div style={{color: '#77'}}>Qty {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img
                            src="https://image.flaticon.com/icons/png/512/1828/1828926.png"
                            alt="increase"
                            className='action-icons'
                            onClick={this.increaseQty}
                        />
                        <img
                            src="https://image.flaticon.com/icons/png/512/992/992683.png"
                            alt="decrease"
                            className='action-icons'
                            onClick={this.decreaseQty}
                        />
                        <img
                            src="https://image.flaticon.com/icons/png/512/1214/1214428.png"
                            alt="delete"
                            className='action-icons'/>
                    </div>
                </div>

            </div>
        )
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem