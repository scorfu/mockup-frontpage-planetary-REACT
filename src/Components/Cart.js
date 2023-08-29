import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import cartLogo from '../assets/Cart.png';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart } from '../cartSlice/cart';

function Cart() {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const cartItems = useSelector(state => state.cart);
    console.log(cartItems);

    const removeItemHandler = (id) => {
        dispatch(removeItemFromCart(id));
    }
    return (
        <>
            <span variant="primary" onClick={handleShow}>
                <img src={cartLogo} alt="cart" />
            </span>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Tickets ({cartItems.length})</Modal.Title>
                </Modal.Header>
                {
                    cartItems.map((item) => <Modal.Body key={item.id}><Button variant="danger" onClick={() => removeItemHandler(item.id)}>X</Button> To: {item.name} -- {item.price} €</Modal.Body>)
                }
                <Modal.Body>Total: {cartItems.map(item => item.price).reduce((acc, no) => acc += no, 0).toFixed(2)} €</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                        CHECKOUT
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Cart;