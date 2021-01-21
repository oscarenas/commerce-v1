import { useState } from 'react';
import { Button, Container, Hero } from '@components/ui';
import { Layout, Banner } from '@components/common';
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
          'https://mltmpgeox6sf.i.optimole.com/G5JfHRg.3FU0~1ec7f/w:auto/h:auto/q:auto/https://reclaimdigital.com/wp-content/uploads/2020/05/nj-web-design-cta.jpg',
        mobile:
          'https://www.emerica.com/on/demandware.static/-/Library-Sites-EmericaSharedLibrary/default/dw17d910c9/Collections/Category%20Banner%20Mobile%202020/Em-FA20-ThePillar-CategoryMobile.jpg',
        desc: 'Call to Action 3',
        link: 'https://twitter.com/',
      },
    ],
  },
};

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
        <div className="relative mb-96">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Data to enrich your</span>
              <span className="block text-indigo-600 xl:inline">
                &nbsp;online business
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-normal">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <Button
                aria-label="Button Component"
                className={s.btn}
                onClick={addToCart}
                loading={false}
                disabled={false}
                Component="button"
                type="submit"
              >
                Button Component
              </Button>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  Live demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <Hero hero={BANNERS.media.hero[1]} />
        <Hero hero={BANNERS.media.hero[2]} />
      </Container>
    </Layout>
  );
}
