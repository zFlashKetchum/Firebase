import React, { useState } from 'react';
import firebase from '../firebase';

const Edit = ({ match }) => {
  const [nome_produto, setNomeProduto] = useState('');
  const [desc_produto, setDescProduto] = useState('');
  const [preco_produto, setPrecoProduto] = useState('');

  useEffect(() => {
    firebase.ref(`products/${match.params.id}`).on('value', (snapshot) => {
      const product = snapshot.val();
      setNomeProduto(product.nome_produto);
      setDescProduto(product.desc_Produto);
      setPrecoProduto(product.preco_Produto);
    });
  }, [match.params.id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    firebase.ref(`products/${match.params.id}`).update({ nome_produto, desc_Produto, preco_Produto });
  };

  return (
    <div>
      <h1>Edit Product</h1>
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
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Edit;