import expresso from '../assets/products_icon/expresso.png'
import americano from '../assets/products_icon/americano.png'
import cremoso from '../assets/products_icon/expresso_cremoso.png'
import gelado from '../assets/products_icon/cafe_gelado.png'
import comLeite from '../assets/products_icon/cafe_com_leite.png'
import latte from '../assets/products_icon/latte.png'
import capuccino from '../assets/products_icon/capuccino.png'
import macchiato from '../assets/products_icon/macchiato.png'
import mocaccino from '../assets/products_icon/mocaccino.png'
import chocolate from '../assets/products_icon/chocolate_quente.png'
import cubano from '../assets/products_icon/cubano.png'
import havaiano from '../assets/products_icon/havaiano.png'
import arabe from '../assets/products_icon/arabe.png'
import irlandes from '../assets/products_icon/irlandes.png'

import expressoImg from '../assets/products_img/expresso.png'
import americanoImg from '../assets/products_img/americano.png'
import cremosoImg from '../assets/products_img/cremoso.png'
import geladoImg from '../assets/products_img/gelado.png'
import comLeiteImg from '../assets/products_img/cafe_com_leite.png'
import latteImg from '../assets/products_img/latte.png'
import capuccinoImg from '../assets/products_img/capuccino.png'
import macchiatoImg from '../assets/products_img/macchiato.png'
import mocaccinoImg from '../assets/products_img/mocaccino.png'
import chocolateImg from '../assets/products_img/chocolate.png'
import cubanoImg from '../assets/products_img/cubano.png'
import havaianoImg from '../assets/products_img/havaiano.png'
import arabeImg from '../assets/products_img/arabe.png'
import irlandesImg from '../assets/products_img/irlandes.png'

export interface ICoffeeData {
  id: number
  name: string
  description: string
  options: string[]
  iconSrc: string
  imgSrc: string
  price: number
}

const coffeeDataList: ICoffeeData[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    options: ['Tradicional'],
    iconSrc: expresso,
    imgSrc: expressoImg,
    price: 6.9,
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    options: ['Tradicional'],
    iconSrc: americano,
    imgSrc: americanoImg,
    price: 8.9,
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    options: ['Tradicional'],
    iconSrc: cremoso,
    imgSrc: cremosoImg,
    price: 11.9,
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    options: ['Tradicional', 'Gelado'],
    iconSrc: gelado,
    imgSrc: geladoImg,
    price: 13.9,
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    options: ['Tradicional', 'Com Leite'],
    iconSrc: comLeite,
    imgSrc: comLeiteImg,
    price: 7.9,
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    options: ['Tradicional', 'Com Leite'],
    iconSrc: latte,
    imgSrc: latteImg,
    price: 12.9,
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    options: ['Tradicional', 'Com Leite'],
    iconSrc: capuccino,
    imgSrc: capuccinoImg,
    price: 15.9,
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    options: ['Tradicional', 'Com Leite'],
    iconSrc: macchiato,
    imgSrc: macchiatoImg,
    price: 10.9,
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    options: ['Tradicional', 'Com Leite'],
    iconSrc: mocaccino,
    imgSrc: mocaccinoImg,
    price: 9.9,
  },
  {
    id: 10,
    name: 'Chocolate quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    options: ['Especial', 'Com Leite'],
    iconSrc: chocolate,
    imgSrc: chocolateImg,
    price: 14.9,
  },
  {
    id: 11,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    options: ['Especial', 'Alcoólico', 'Gelado'],
    iconSrc: cubano,
    imgSrc: cubanoImg,
    price: 13.9,
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    options: ['Especial'],
    iconSrc: havaiano,
    imgSrc: havaianoImg,
    price: 16.9,
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    options: ['Especial'],
    iconSrc: arabe,
    imgSrc: arabeImg,
    price: 12.9,
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantili',
    options: ['Especial', 'Alcoólico'],
    iconSrc: irlandes,
    imgSrc: irlandesImg,
    price: 19.9,
  },
]

export default coffeeDataList
