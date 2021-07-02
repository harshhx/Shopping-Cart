import React from 'react' ;

class CartItem extends React.Component {

    render() {
        // console.log(this.props)
        const {price, title, qty} = this.props.product;
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
                            onClick={()=>this.props.onIncreaseQuantity(this.props.product)}
                        />
                        <img
                            src="https://image.flaticon.com/icons/png/512/992/992683.png"
                            alt="decrease"
                            className='action-icons'
                            onClick={()=>this.props.onDecreaseQuantity(this.props.product)}
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