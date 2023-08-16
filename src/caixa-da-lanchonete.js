class CaixaDaLanchonete {
    calcularValorDaCompra(formaDePagamento, itens) {
      const cardapio = {
        cafe: { codigo: 'cafe', descricao: 'Café', valor: 3.00 },
        chantily: { codigo: 'chantily', descricao: 'Chantily (extra do Café)', valor: 1.50 },
        suco: { codigo: 'suco', descricao: 'Suco Natural', valor: 6.20 },
        sanduiche: { codigo:'sanduiche', descricao: 'Sanduíche', valor: 6.50 },
        queijo: { codigo:'queijo', descricao: 'Queijo (extra do Sanduíche)', valor: 2.00 },
        salgado: { codigo:'salgado', descricao: 'Salgado', valor: 7.25 },
        combo1: { codigo:'combo1', descricao: '1 Suco e 1 Sanduíche', valor: 9.50 },
        combo2: { codigo:'combo2', descricao: '1 Café e 1 Sanduíche', valor: 7.50 },
      };
  
      const formasDePagamentoValidas = ['debito', 'credito', 'dinheiro'];
      if (!formasDePagamentoValidas.includes(formaDePagamento)) {
        return "Forma de pagamento inválida!";
      }
  
      const itensNoCarrinho = {};
      let valorTotal = 0;
  
      for (const itemQuantidade of itens) {
        const [codigo, quantidade] = itemQuantidade.split(',');
        if (!cardapio[codigo]) {
          return "Item inválido!";
        }
  
      if (formaDePagamento === 'dinheiro') {
        valorTotal *= 0.95; // Desconto de 5% 
      } else if (formaDePagamento === 'credito') {
        valorTotal *= 1.03; // Acréscimo de 3%
      }
  
      if (Object.keys(itensNoCarrinho).length === 0) {
        return "Não há itens no carrinho de compra!";
      }
  
      return `R$ ${valorTotal.toFixed(2)}`;
    }
  }
}