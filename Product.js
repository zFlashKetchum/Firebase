import React from 'react';

const Product = ({ product }) => {
  return (
    <div>
      <h2>{product.nome_produto}</h2>
      <p>{product.desc_Produto}</p>
      <p>Preço: {product.preco_Produto}</p>
    </div>
  );
};

export default Product;