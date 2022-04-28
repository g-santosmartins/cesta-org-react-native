import logoFarm from '../../assets/logo.png'
import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abóbora.png'

const basket = {
  top: {
    title: "Detalhe da Cesta",
  },
  details: {
    name: "Cesta de Verduras",
    farmName: "Janny Jack Farm",
    logoFarm: logoFarm,
    description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha.",
    price: "R$ 40,00",
    button: "Comprar"
  },
  itens: {
    title: "Itens da Cesta",
    lista: [
      {
        name: "Tomate",
        image: tomate
      },

      {
        name: "Brócolis",
        image: brocolis
      },

      {
        name: "Batata",
        image: batata
      },
      {
        name: "Pepino",
        image: pepino,
      },
      {
        name: "Abóbora",
        image: abobora,
      }
    ]
  }
}


export default basket