export default () => ({ // eslint-disable-line

  // link file UUID
  id: '31d65b3e-bcd5-11e8-94b2-17176fbf93f5',

  // canonical URL of the published page
  // https://ig.ft.com/special-reports/ft-1000/asia-pacific/2018/ get filled in by the ./configure script
  url: 'https://ig.ft.com/future-100/2018/',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date('2018-09-24T04:00:00Z'),

  headline: 'FT Future 100 UK: the full list',

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'These British companies are making an impact, either on society or their industry',

  topic: {
    name: 'FT Future 100 UK',
    url: 'https://www.ft.com/reports/ft-future-100-uk',
  },

  // relatedArticle: {
  //   text: 'Statista',
  //   url: 'https://www.statista.com/aboutus/',
  // },

  mainImage: {
    title: 'FT Future 100 UK: the full list',
    description: 'These British companies are making an impact, either on society or their industry',
    url: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A94c457f6-7e04-11e8-af48-190d103e32a4?source=ig&width=2048&height=1152&quality=high',
    width: 2048, // ensure correct width
    height: 1152, // ensure correct height
  },

  // Byline can by a plain string, markdown, or array of authors
  // if array of authors, url is optional
  byline: [
    { name: 'Ian Smith', url: 'https://www.ft.com/stream/d67e3d4c-2e3b-3e61-80c9-d85a559b600d' },
    { name: 'David Blood', url: 'https://www.ft.com/david-blood' },
  ],

  // Appears in the HTML <title>
  title: 'FT Future 100 UK: the full list',

  // meta data
  description: 'These British companies are making an impact, either on society or their industry',

  /*
  TODO: Select Twitter card type -
        summary or summary_large_image

        Twitter card docs:
        https://dev.twitter.com/cards/markup
  */
  twitterCard: 'summary_large_image',

  /*
  TODO: Do you want to tweak any of the
        optional social meta data?
  */
  // General social
  socialImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A94c457f6-7e04-11e8-af48-190d103e32a4?source=ig&width=700&quality=high',
  socialHeadline: 'FT Future 100 UK: the full list',
  socialSummary: 'These British companies are making an impact, either on society or their industry',

  // TWITTER
  twitterImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A94c457f6-7e04-11e8-af48-190d103e32a4?source=ig&width=700&quality=high',
  twitterCreator: '@ftreports',
  twitterHeadline: 'FT Future 100 UK: the full list',
  tweetText: 'These British companies are making an impact, either on society or their industry',

  // FACEBOOK
  facebookImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A94c457f6-7e04-11e8-af48-190d103e32a4?source=ig&width=700&quality=high',
  facebookHeadline: 'FT Future 100 UK: the full list',

  // ADVERTISING
  ads: {
    // Ad unit hierarchy makes ads more granular.
    gptSite: 'ft.com',
    // Start with ft.com and /companies /markets /world as appropriate to your story
    gptZone: 'ft.1000.europe',
    // granular targeting is optional and will be specified by the ads team
    dfpTargeting: false,
  },

  tracking: {

    /*

    Microsite Name

    e.g. guffipedia, business-books, baseline.
    Used to query groups of pages, not intended for use with
    one off interactive pages. If you're building a microsite
    consider more custom tracking to allow better analysis.
    Also used for pages that do not have a UUID for whatever reason
    */
    // micrositeName: '',

    /*
    Product name

    This will usually default to IG
    however another value may be needed
    */
    // product: '',
  },
});
