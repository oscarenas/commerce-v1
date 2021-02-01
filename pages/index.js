import { Button, Container, Hero } from '@components/ui';
import { Layout, Banner, HomeProducts } from '@components/common';
import s from '../components/ui/Button/Button.module.css';

const BANNERS = {
  media: {
    banner: [
      {
        desktop:
          'https://www.pyropainters.de/images/pyropaintersde/162-vans-cheap-skors-online-vans-skors-sales-3013.jpg',
        mobile:
          'https://vansco.vteximg.com.br/arquivos/ids/243671/BANNER-MOBILE_BACKSCHOOL.jpg',
        desc: 'descripcion uno del banner',
        link: 'https://google.com',
      },
      {
        desktop: 'https://www.zimbabwetienda.com/images/BANNER-NIKE-SB-3.jpg',
        mobile:
          'https://i.pinimg.com/originals/2e/2d/ab/2e2dab8bac3d4577c7e90a32df3b9a85.jpg',
        desc: 'descripcion dos',
        link: 'https://facebook.com',
      },
      {
        desktop:
          'https://www.etnies.com/on/demandware.static/-/Library-Sites-EtniesSharedLibrary/default/dw0a2b04ab/Collections/Category/Category%202020/ET_FA20_Michelin_Pack_eComm_Banners_ET_FA20_Michelin_Pack_Homepage.jpg',
        mobile:
          'https://d8ni2q4fyw-flywheel.netdna-ssl.com/wp-content/uploads/2020/11/MLL-CTA-banner-mobile-ETNIES-OCT-2020-720x720.jpg',
        desc: 'descripcion tres',
        link: 'https://twitter.com/',
      },
    ],
    hero: [
      {
        desktop: 'https://www.collectoffers.com/EditorImages/banner1.jpg',
        mobile:
          'https://media.dcshoes.com.au/media/dc/rwd/giftguide/2021/2101-dc-gifting-essentials-banner-mobile-2.gif',
        desc: 'Call to Action 1',
        link: 'https://google.com',
      },
      {
        desktop: 'https://www.speedshoes.com.br/image/catalog/adidas.jpg',
        mobile:
          'https://d321d41hgs2fyt.cloudfront.net/media/wysiwyg/landings/hombre/2020/diciembre-21/mobile/ES/banner-adidas-hombre-mobile.jpg',
        desc: 'Call to Action 2',
        link: 'https://facebook.com',
      },
      {
        desktop:
          'https://res.cloudinary.com/oscarenas/image/upload/v1611208012/store/cta.jpg',
        mobile:
          'https://res.cloudinary.com/oscarenas/image/upload/v1611208775/store/cta-mobile.jpg',
        desc: 'Call to Action 3',
        link: false,
      },
    ],
  },
};

const DATA = [
  {
    id: 'cre1l',
    sku: '1606331441196',
    publicado: true,
    nombre: 'ITEM 3',
    destacado: true,
    nuevoProducto: false,
    promocion: false,
    descripcionCorta: 'This is a variable product.',
    descripcion:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
    stockdisponible: '15',
    stock: true,
    devolucion: false,
    peso: false,
    longitud: false,
    ancho: false,
    alto: false,
    notaVenta:
      'Este producto esta disponible hasta el mes de septiembre de este año.',
    precioVenta: 38000,
    precioPromo: 27000,
    categoria: ['mujer', 'ropa', 'faldas'],
    mediaImagen1: 'Productos_Images/setUid.media-imagen-1.061437.jpg',
    mediaImagen2: 'Productos_Images/setUid.media-imagen-2.061437.jpg',
    mediaImagen3: 'Productos_Images/setUid.media-imagen-3.061437.jpg',
    mediaImagen4: 'Productos_Images/setUid.media-imagen-4.061437.jpg',
    mediaImagen5: 'Productos_Images/setUid.media-imagen-5.061437.jpg',
    mediaYoutube: 'https://www.youtube.com/watch?v=lky2P_aw6nc&ab_channel=Nike',
    nombreAtributo1: false,
    valorAtributo1: false,
    nombreAtributo2: false,
    valorAtributo2: false,
  },
  {
    id: 'cyevm',
    sku: '1606331441321',
    publicado: true,
    nombre: 'ITEM 8',
    destacado: true,
    nuevoProducto: true,
    promocion: false,
    descripcionCorta: 'This is a variable product.',
    descripcion:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
    stockdisponible: '3',
    stock: true,
    devolucion: false,
    peso: '300g',
    longitud: '50cm',
    ancho: '25cm',
    alto: '80cm',
    notaVenta:
      'Este producto esta disponible hasta el mes de septiembre de este año.',
    precioVenta: 38000,
    precioPromo: 27000,
    categoria: ['mujer', 'tennis'],
    mediaImagen1:
      'https://dafitistaticco-a.akamaihd.net/p/levis-4742-1423101-1-product.jpg',
    mediaImagen2:
      'https://dafitistaticco-a.akamaihd.net/p/levis-4743-1423101-2-product.jpg',
    mediaImagen3:
      'https://dafitistaticco-a.akamaihd.net/p/levis-4745-1423101-3-product.jpg',
    mediaImagen4:
      'https://dafitistaticco-a.akamaihd.net/p/levis-4746-1423101-4-product.jpg',
    mediaImagen5: false,
    mediaYoutube: false,
    nombreAtributo1: 'color',
    valorAtributo1: ['azul', 'rojo', 'amarillo', 'verde', 'negro', 'blanco'],
    nombreAtributo2: 'Talla',
    valorAtributo2: ['xs', 's', 'm', 'l', 'xl'],
  },
  {
    id: 'd180g',
    sku: '1606331441222',
    publicado: true,
    nombre: 'ITEM 10',
    destacado: false,
    nuevoProducto: true,
    promocion: false,
    descripcionCorta: 'This is a variable product.',
    descripcion:
      'XXXXXXXXXXX Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
    stockdisponible: '3',
    stock: true,
    devolucion: false,
    peso: '300g',
    longitud: '50cm',
    ancho: '25cm',
    alto: '80cm',
    notaVenta:
      'Este producto esta disponible hasta el mes de septiembre de este año.',
    precioVenta: 38000,
    precioPromo: 27000,
    categoria: ['hombre', 'ropa', 'camisetas'],
    mediaImagen1:
      'https://dafitistaticco-a.akamaihd.net/p/levis-4742-1423101-1-product.jpg',
    mediaImagen2:
      'https://dafitistaticco-a.akamaihd.net/p/levis-4743-1423101-2-product.jpg',
    mediaImagen3:
      'https://dafitistaticco-a.akamaihd.net/p/levis-4745-1423101-3-product.jpg',
    mediaImagen4:
      'https://dafitistaticco-a.akamaihd.net/p/levis-4746-1423101-4-product.jpg',
    mediaImagen5: false,
    mediaYoutube: false,
    nombreAtributo1: 'color',
    valorAtributo1: ['azul', 'rojo', 'amarillo', 'verde', 'negro', 'blanco'],
    nombreAtributo2: 'Talla',
    valorAtributo2: ['xs', 's', 'm', 'l', 'xl'],
  },
  {
    id: 'ciyn3',
    sku: '1606331441379',
    publicado: true,
    nombre: 'ITEM 5',
    destacado: false,
    nuevoProducto: false,
    promocion: false,
    descripcionCorta: 'This is a variable product.',
    descripcion:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
    stockdisponible: '3',
    stock: true,
    devolucion: true,
    peso: '300g',
    longitud: '50cm',
    ancho: '25cm',
    alto: '80cm',
    notaVenta:
      'Este producto esta disponible hasta el mes de septiembre de este año.',
    precioVenta: 38000,
    precioPromo: 27000,
    categoria: ['mujer', 'ropa', 'blusas'],
    mediaImagen1:
      'https://dafitistaticco-a.akamaihd.net/p/levis-4742-1423101-1-product.jpg',
    mediaImagen2:
      'https://dafitistaticco-a.akamaihd.net/p/levis-4743-1423101-2-product.jpg',
    mediaImagen3:
      'https://dafitistaticco-a.akamaihd.net/p/levis-4745-1423101-3-product.jpg',
    mediaImagen4:
      'https://dafitistaticco-a.akamaihd.net/p/levis-4746-1423101-4-product.jpg',
    mediaImagen5: false,
    mediaYoutube: false,
    nombreAtributo1: 'color',
    valorAtributo1: ['azul', 'rojo', 'amarillo', 'verde', 'negro', 'blanco'],
    nombreAtributo2: 'Talla',
    valorAtributo2: ['xs', 's', 'm', 'l', 'xl'],
  },
  {
    id: 'cu76f',
    sku: '1606331440987',
    publicado: true,
    nombre: 'ITEM 13',
    destacado: true,
    nuevoProducto: false,
    promocion: true,
    descripcionCorta: 'This is a variable product.',
    descripcion:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
    stockdisponible: '3',
    stock: true,
    devolucion: true,
    peso: '300g',
    longitud: '50cm',
    ancho: '25cm',
    alto: '80cm',
    notaVenta:
      'Este producto esta disponible hasta el mes de septiembre de este año.',
    precioVenta: 38000,
    precioPromo: 27000,
    categoria: ['hombre', 'ropa', 'camisetas'],
    mediaImagen1:
      'https://res.cloudinary.com/oscarenas/image/upload/v1598071151/bike/p25zix17ga6o0qj3jinr.jpg',
    mediaImagen2:
      'https://dafitistaticco-a.akamaihd.net/p/levis-4743-1423101-2-product.jpg',
    mediaImagen3:
      'https://dafitistaticco-a.akamaihd.net/p/levis-4745-1423101-3-product.jpg',
    mediaImagen4:
      'https://dafitistaticco-a.akamaihd.net/p/levis-4746-1423101-4-product.jpg',
    mediaImagen5: false,
    mediaYoutube: false,
    nombreAtributo1: 'color',
    valorAtributo1: ['azul', 'rojo', 'amarillo', 'verde', 'negro', 'blanco'],
    nombreAtributo2: 'Talla',
    valorAtributo2: ['xs', 's', 'm', 'l', 'xl'],
  },
  {
    id: 'cztg3',
    sku: '1606331441198',
    publicado: true,
    nombre: 'ITEM 9',
    destacado: true,
    nuevoProducto: true,
    promocion: false,
    descripcionCorta: 'This is a variable product.',
    descripcion:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
    stockdisponible: '3',
    stock: true,
    devolucion: false,
    peso: '300g',
    longitud: '50cm',
    ancho: '25cm',
    alto: '80cm',
    notaVenta:
      'Este producto esta disponible hasta el mes de septiembre de este año.',
    precioVenta: 38000,
    precioPromo: 27000,
    categoria: ['hombre', 'ropa', 'camisetas'],
    mediaImagen1:
      'https://dafitistaticco-a.akamaihd.net/p/levis-4742-1423101-1-product.jpg',
    mediaImagen2:
      'https://dafitistaticco-a.akamaihd.net/p/levis-4743-1423101-2-product.jpg',
    mediaImagen3:
      'https://dafitistaticco-a.akamaihd.net/p/levis-4745-1423101-3-product.jpg',
    mediaImagen4:
      'https://dafitistaticco-a.akamaihd.net/p/levis-4746-1423101-4-product.jpg',
    mediaImagen5: false,
    mediaYoutube: false,
    nombreAtributo1: 'color',
    valorAtributo1: ['azul', 'rojo', 'amarillo', 'verde', 'negro', 'blanco'],
    nombreAtributo2: 'Talla',
    valorAtributo2: ['xs', 's', 'm', 'l', 'xl'],
  },
  {
    id: 'clrrx',
    sku: '1606331440981',
    publicado: true,
    nombre: 'ITEM 7',
    destacado: true,
    nuevoProducto: true,
    promocion: false,
    descripcionCorta: 'This is a variable product.',
    descripcion:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
    stockdisponible: '3',
    stock: true,
    devolucion: false,
    peso: '300g',
    longitud: '50cm',
    ancho: '25cm',
    alto: '80cm',
    notaVenta:
      'Este producto esta disponible hasta el mes de septiembre de este año.',
    precioVenta: 38000,
    precioPromo: 27000,
    categoria: ['mujer', 'perfumes'],
    mediaImagen1:
      'https://dafitistaticco-a.akamaihd.net/p/levis-4742-1423101-1-product.jpg',
    mediaImagen2:
      'https://dafitistaticco-a.akamaihd.net/p/levis-4743-1423101-2-product.jpg',
    mediaImagen3:
      'https://dafitistaticco-a.akamaihd.net/p/levis-4745-1423101-3-product.jpg',
    mediaImagen4:
      'https://dafitistaticco-a.akamaihd.net/p/levis-4746-1423101-4-product.jpg',
    mediaImagen5: false,
    mediaYoutube: false,
    nombreAtributo1: 'color',
    valorAtributo1: ['azul', 'rojo', 'amarillo', 'verde', 'negro', 'blanco'],
    nombreAtributo2: 'Talla',
    valorAtributo2: ['xs', 's', 'm', 'l', 'xl'],
  },
  {
    id: 'cssly',
    sku: '1606331441194',
    publicado: true,
    nombre: 'ITEM 12',
    destacado: false,
    nuevoProducto: true,
    promocion: false,
    descripcionCorta: 'This is a variable product.',
    descripcion:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
    stockdisponible: '3',
    stock: true,
    devolucion: false,
    peso: '300g',
    longitud: '50cm',
    ancho: '25cm',
    alto: '80cm',
    notaVenta:
      'Este producto esta disponible hasta el mes de septiembre de este año.',
    precioVenta: 38000,
    precioPromo: 27000,
    categoria: ['hombre', 'ropa', 'camisetas'],
    mediaImagen1:
      'https://res.cloudinary.com/oscarenas/image/upload/v1598078219/bike/jbkeol8ahgppig1h14ae.jpg',
    mediaImagen2:
      'https://dafitistaticco-a.akamaihd.net/p/levis-4743-1423101-2-product.jpg',
    mediaImagen3:
      'https://dafitistaticco-a.akamaihd.net/p/levis-4745-1423101-3-product.jpg',
    mediaImagen4:
      'https://dafitistaticco-a.akamaihd.net/p/levis-4746-1423101-4-product.jpg',
    mediaImagen5: false,
    mediaYoutube: false,
    nombreAtributo1: 'color',
    valorAtributo1: ['azul', 'rojo', 'amarillo', 'verde', 'negro', 'blanco'],
    nombreAtributo2: 'Talla',
    valorAtributo2: ['xs', 's', 'm', 'l', 'xl'],
  },
  {
    id: 'chk2m',
    sku: '1606331440884',
    publicado: true,
    nombre: 'Kit de champu y acondicionador',
    destacado: false,
    nuevoProducto: false,
    promocion: false,
    descripcionCorta: 'This is a variable product.',
    descripcion:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
    stockdisponible: '3',
    stock: true,
    devolucion: false,
    peso: '300g',
    longitud: '50cm',
    ancho: '25cm',
    alto: '80cm',
    notaVenta:
      'Este producto esta disponible hasta el mes de septiembre de este año.',
    precioVenta: 38000,
    precioPromo: 27000,
    categoria: ['hombre', 'ropa', 'pantalones'],
    mediaImagen1:
      'https://res.cloudinary.com/oscarenas/image/upload/v1598031688/bike/tqcthnbftww49ic06ioh.gif',
    mediaImagen2:
      'https://dafitistaticco-a.akamaihd.net/p/levis-4743-1423101-2-product.jpg',
    mediaImagen3:
      'https://dafitistaticco-a.akamaihd.net/p/levis-4745-1423101-3-product.jpg',
    mediaImagen4:
      'https://dafitistaticco-a.akamaihd.net/p/levis-4746-1423101-4-product.jpg',
    mediaImagen5: false,
    mediaYoutube: false,
    nombreAtributo1: 'color',
    valorAtributo1: [
      'azul tornasol',
      'rojo',
      'amarillo',
      'verde',
      'negro',
      'blanco',
    ],
    nombreAtributo2: 'Talla',
    valorAtributo2: ['xs', 's', 'm', 'l', 'xl'],
  },
  {
    id: 'cpzh4',
    sku: '1606331440979',
    publicado: true,
    nombre: 'Slim Fit Cotton Oxford Shirt',
    destacado: true,
    nuevoProducto: false,
    promocion: false,
    descripcionCorta:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
    descripcion:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
    stockdisponible: '9',
    stock: true,
    devolucion: true,
    peso: '300g',
    longitud: '50cm',
    ancho: '25cm',
    alto: '80cm',
    notaVenta:
      'Este producto esta disponible hasta el mes de septiembre de este año.',
    precioVenta: false,
    precioPromo: false,
    categoria: ['hombre', 'calzado', 'tennis'],
    mediaImagen1:
      'https://res.cloudinary.com/oscarenas/image/upload/v1598078219/bike/jbkeol8ahgppig1h14ae.jpg',
    mediaImagen2:
      'https://dafitistaticco-a.akamaihd.net/p/levis-4743-1423101-2-product.jpg',
    mediaImagen3:
      'https://dafitistaticco-a.akamaihd.net/p/levis-4745-1423101-3-product.jpg',
    mediaImagen4:
      'https://dafitistaticco-a.akamaihd.net/p/levis-4746-1423101-4-product.jpg',
    mediaImagen5: false,
    mediaYoutube: false,
    nombreAtributo1: 'color',
    valorAtributo1: ['azul', 'rojo', 'amarillo', 'verde', 'negro', 'blanco'],
    nombreAtributo2: false,
    valorAtributo2: false,
  },
  {
    id: 'ckd7g',
    sku: '1606331441442',
    publicado: true,
    nombre: 'ITEM 6',
    destacado: false,
    nuevoProducto: false,
    promocion: false,
    descripcionCorta: 'This is a variable product.',
    descripcion:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
    stockdisponible: '3',
    stock: true,
    devolucion: false,
    peso: '300g',
    longitud: '50cm',
    ancho: '25cm',
    alto: '80cm',
    notaVenta:
      'Este producto esta disponible hasta el mes de septiembre de este año.',
    precioVenta: 38000,
    precioPromo: 27000,
    categoria: ['hombre', 'ropa', 'chaquetas'],
    mediaImagen1:
      'https://dafitistaticco-a.akamaihd.net/p/levis-4742-1423101-1-product.jpg',
    mediaImagen2:
      'https://dafitistaticco-a.akamaihd.net/p/levis-4743-1423101-2-product.jpg',
    mediaImagen3:
      'https://dafitistaticco-a.akamaihd.net/p/levis-4745-1423101-3-product.jpg',
    mediaImagen4:
      'https://dafitistaticco-a.akamaihd.net/p/levis-4746-1423101-4-product.jpg',
    mediaImagen5: false,
    mediaYoutube: false,
    nombreAtributo1: 'color',
    valorAtributo1: ['azul', 'rojo', 'amarillo', 'verde', 'negro', 'blanco'],
    nombreAtributo2: 'Talla',
    valorAtributo2: ['xs', 's', 'm', 'l', 'xl'],
  },
  {
    id: 'd2mkx',
    sku: '1606331440868',
    publicado: true,
    nombre: 'ITEM 11',
    destacado: false,
    nuevoProducto: true,
    promocion: false,
    descripcionCorta:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ',
    descripcion:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ',
    stockdisponible: '3',
    stock: true,
    devolucion: false,
    peso: '300g',
    longitud: '50cm',
    ancho: '25cm',
    alto: '80cm',
    notaVenta:
      'Este producto esta disponible hasta el mes de diciembre de este año.',
    precioVenta: 38000,
    precioPromo: 27000,
    categoria: ['hombre', 'ropa', 'camisetas'],
    mediaImagen1:
      'https://res.cloudinary.com/oscarenas/image/upload/v1599683440/bike/od2tbntuwznlmudzm207.jpg',
    mediaImagen2:
      'https://dafitistaticco-a.akamaihd.net/p/levis-4743-1423101-2-product.jpg',
    mediaImagen3:
      'https://dafitistaticco-a.akamaihd.net/p/levis-4745-1423101-3-product.jpg',
    mediaImagen4:
      'https://dafitistaticco-a.akamaihd.net/p/levis-4746-1423101-4-product.jpg',
    mediaImagen5: false,
    mediaYoutube: false,
    nombreAtributo1: 'color',
    valorAtributo1: ['azul', 'rojo', 'amarillo', 'verde', 'negro', 'blanco'],
    nombreAtributo2: 'Talla',
    valorAtributo2: ['xs', 's', 'm', 'l', 'xl'],
  },
];

const testObj = {
  desktop: '1231',
  mobile:
    'https://i.pinimg.com/originals/27/1c/c6/271cc6511664cc4400e59ebaa34c311d.jpg',
  desc: '456',
  link: null,
};

export default function Home() {
  const addToCart = () => {
    console.log('addToCart');
  };

  return (
    <Layout>
      <Banner images={BANNERS.media.banner} />
      <Container>
        <Hero hero={BANNERS.media.hero[0]} />
        <div className="relative">
          <div className="sm:text-center mb-5">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl my-20">
              <span className="block xl:inline">Nuestra</span>
              <span className="block text-indigo-600 xl:inline">
                &nbsp;Tienda
              </span>
            </h1>
          </div>
          <HomeProducts products={DATA} />
        </div>
        <Hero hero={BANNERS.media.hero[1]} />
        <Hero hero={BANNERS.media.hero[2]} />
      </Container>
    </Layout>
  );
}
