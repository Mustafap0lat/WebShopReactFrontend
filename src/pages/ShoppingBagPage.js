import React from 'react'
import { CartContext } from '../CartContext';
import { useEffect, useState, useContext } from 'react';
import { Container } from 'react-bootstrap';

const ShoppingBagPage = () => {
  const { items, getTotalPrice } = useContext(CartContext);
  let [total, setTotal] = useState("");

  useEffect(() => {
    setTotal(getTotalPrice());
  }, [getTotalPrice]);

  return (
    <Container>
      {items.map((product, key) => (
        <div key={key} >
          <p>ProductName: {product.product.productName}</p>
          <p>ProductPrice: {product.product.price}</p>
          <p>Quantity: {product.qty}</p>
        </div>
      ))}
      <p>{total}</p>
    </Container>
  )
}

export default ShoppingBagPage;