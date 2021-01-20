const shareSocial = (info) => {
  let tmpSocial = [];
  let url = {};

  for (const key in info) {
    if (info.hasOwnProperty(key)) {
      const element = info[key];
      if (element) {
        switch (key) {
          case 'whatsapp':
            url = {
              label: 'Whatsapp',
              url: `https://wa.me/+57${encodeURI(element)}`,
              icon: 'fab fa-whatsapp',
            };
            tmpSocial.push(url);

            break;

          case 'messenger':
            url = {
              label: 'Messenger',
              url: encodeURI(element),
              icon: 'fab fa-facebook-messenger',
            };
            tmpSocial.push(url);

            break;

          case 'instagram':
            url = {
              label: 'Instagram',
              url: encodeURI(element),
              icon: 'fab fa-instagram',
            };
            tmpSocial.push(url);

            break;

          case 'facebook':
            url = {
              label: 'Facebook',
              url: encodeURI(element),
              icon: 'fab fa-facebook-f',
            };
            tmpSocial.push(url);

            break;

          case 'twitter':
            url = {
              label: 'Twitter',
              url: encodeURI(element),
              icon: 'fab fa-twitter',
            };
            tmpSocial.push(url);

            break;

          case 'youtube':
            url = {
              label: 'Youtube',
              url: encodeURI(element),
              icon: 'fab fa-youtube',
            };
            tmpSocial.push(url);

            break;

          case 'snapchat':
            url = {
              label: 'Snapchat',
              url: encodeURI(element),
              icon: 'fab fa-snapchat-ghost',
            };
            tmpSocial.push(url);

            break;

          case 'linkedin':
            url = {
              label: 'Linkedin',
              url: encodeURI(element),
              icon: 'fab fa-linkedin',
            };
            tmpSocial.push(url);

            break;

          case 'tiktok':
            url = {
              label: 'Tiktok',
              url: encodeURI(element),
              icon: 'fab fa-tiktok',
            };
            tmpSocial.push(url);

            break;

          default:
            break;
        }
      }
    }
  }
  return tmpSocial;
};

const sharePhone = (phone) => {
  return `tel:+57${phone}`;
};

const shareMail = (correo) => {
  return `mailto:${correo}`;
};

export { shareSocial, sharePhone, shareMail };
