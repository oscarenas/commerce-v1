import Button from '../components/ui/Button';
import Layout from '../components/common/Layout';
import Banner from '../components/common/Banner';
import Container from '../components/ui/Container';
import s from '../components/ui/Button/Button.module.css';

const BANNERS = {
  media: [
    {
      id: '1',
      bannerEscritorio:
        'https://cdn.shopify.com/s/files/1/2141/9909/files/Heineken_Banner.jpg',
      bannerMobile:
        'https://scontent.fbog15-1.fna.fbcdn.net/v/t31.0-8/s720x720/479172_314989985249999_52906271_o.jpg?_nc_cat=108&ccb=2&_nc_sid=174925&_nc_ohc=zYo3kz9-BscAX9OMC7U&_nc_ht=scontent.fbog15-1.fna&tp=7&oh=c3f7f34a43164536a1ec773f468f0893&oe=600E5CA6',
      bannerLink: 'https://google.com',
      bannerDescripcion: 'descripcion uno del banner',
      ctaEscritorio:
        'https://static.crello.com/api/templates/5f886765a637ee11e385d265/thumbnails/0?size=1280',
      ctaMobile:
        'https://static.crello.com/api/templates/5e997523499b85dcc78535e6/thumbnails/0?size=788',
      ctaDescripcion: 'Call to Action 1',
      ctaLink: 'https://google.com',
    },
    {
      id: '2',
      bannerEscritorio:
        'https://static.wixstatic.com/media/a8f074_f692a430da514f3d8e89bc31672f6931.jpg',
      bannerMobile:
        'https://i.pinimg.com/originals/27/1c/c6/271cc6511664cc4400e59ebaa34c311d.jpg',
      bannerLink: 'https://facebook.com',
      bannerDescripcion: 'descripcion dos',
      ctaEscritorio:
        'https://static.crello.com/api/templates/5f844dfda637ee11e3281959/thumbnails/0?size=1280',
      ctaMobile:
        'https://static.crello.com/api/templates/5931408595a7a863ddcdcb1c/thumbnails/0?size=788',
      ctaDescripcion: 'Call to Action 2',
      ctaLink: 'https://facebook.com',
    },
    {
      id: '3',
      bannerEscritorio:
        'https://beerwithus1.files.wordpress.com/2019/03/erdinger-banner-6.jpg',
      bannerMobile:
        'https://scontent.fbog15-1.fna.fbcdn.net/v/t31.0-8/s720x720/479172_314989985249999_52906271_o.jpg?_nc_cat=108&ccb=2&_nc_sid=174925&_nc_ohc=zYo3kz9-BscAX9OMC7U&_nc_ht=scontent.fbog15-1.fna&tp=7&oh=c3f7f34a43164536a1ec773f468f0893&oe=600E5CA6',
      bannerLink: 'https://twitter.com/',
      bannerDescripcion: 'descripcion tres',
      ctaEscritorio:
        'https://static.crello.com/api/templates/5f886765a637ee11e385d265/thumbnails/0?size=1280',
      ctaMobile:
        'https://static.crello.com/api/templates/5e997523499b85dcc78535e6/thumbnails/0?size=788',
      ctaDescripcion: 'Call to Action 3',
      ctaLink: 'https://twitter.com/',
    },
  ],
};
export default function Home() {
  const addToCart = () => {
    console.log('addToCart');
  };
  return (
    <Layout>
      <Banner images={BANNERS.media} />
      <Container>
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
                className={s.slim}
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
      </Container>
    </Layout>
  );
}
