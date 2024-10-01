import React, { useState } from 'react';
import firebase from '../firebase';

const Register = () => {
  const [nome_produto, setNomeProduto] = useState('');
  const [desc_Produto, setDescProduto] = useState('');
  const [preco_Produto, setPrecoProduto] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    firebase.ref('products').push({ nome_produto, desc_Produto, preco_Produto });
  };

  return (
    <div>
      <h1>Register Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome do Produto:
          <input type="text" value={nome_produto} onChange={(event) => setNomeProduto(event.target.value)} />
        </label>
        <br />
        <label>
          Descrição do Produto:
          <input type="text" value={desc_Produto} onChange={(event) => setDescProduto(event.target.value)} />
        </label>
        <br />
        <label>
          Preço do Produto:
          <input type="number" value={preco_Produto} onChange={(event) => setPrecoProduto(event.target.value)} />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;