import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import Product from './Product';

const List = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    firebase.ref('products').on('value', (snapshot) => {
      setProducts(snapshot.val());
    });
  }, []);

  return (
    <div>
      <h1>Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Product product={product} />
            <button onClick={() => firebase.ref(`products/${product.id}`).remove()}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;