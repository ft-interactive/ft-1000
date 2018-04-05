export default () => ({ // eslint-disable-line

  // link file UUID
  id: 'cf0c5fce-3112-11e8-b5bf-23cb17fd1498',

  // canonical URL of the published page
  // https://ig.ft.com/special-reports/ft-1000/asia-pacific/2018/ get filled in by the ./configure script
  url: 'https://ig.ft.com/ft-1000/2018/',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date('2018-04-06T04:00:00Z'),

  headline: 'The FT 1000: the complete list of Europe’s fastest-growing companies',

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'Tech remains king, according to list compiled with',

  topic: {
    name: 'FT 1000: Europe\'s Fastest Growing Companies',
    url: 'https://www.ft.com/reports/europes-fastest-growing-companies',
  },

  relatedArticle: {
    text: 'Statista',
    url: 'https://www.statista.com/aboutus/',
  },

  mainImage: {
    title: 'The FT 1000: the complete list of Europe’s fastest-growing companies',
    description: 'Now in its second year, the FT 1000 – compiled with Statista – shows tech remains king, and is creating thousands of jobs',
    url: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A8ed33e5a-38c4-11e8-b161-65936015ebc3?source=ig&width=2084&height=1152&quality=high',
    width: 2048, // ensure correct width
    height: 1152, // ensure correct height
  },

  // Byline can by a plain string, markdown, or array of authors
  // if array of authors, url is optional
  byline: [
    { name: 'David Blood', url: 'https://www.ft.com/david-blood' },
    { name: 'Ændrew Rininsland', url: 'https://www.ft.com/%C3%A6ndrew-rininsland' },
    { name: 'Ian Smith', url: 'https://www.ft.com/stream/d67e3d4c-2e3b-3e61-80c9-d85a559b600d' },
  ],

  // Appears in the HTML <title>
  title: 'The FT 1000: the complete list of Europe’s fastest-growing companies',

  // meta data
  description: 'Now in its second year, the FT 1000 – compiled with Statista – shows tech remains king, and is creating thousands of jobs',

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
  socialImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A8ed33e5a-38c4-11e8-b161-65936015ebc3?source=ig&width=2084&height=1152&quality=high',
  socialHeadline: 'The FT 1000: the complete list of Europe’s fastest-growing companies',
  socialSummary: 'Now in its second year, the FT 1000 – compiled with Statista – shows tech remains king, and is creating thousands of jobs',

  // TWITTER
  twitterImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A8ed33e5a-38c4-11e8-b161-65936015ebc3?source=ig&width=2084&height=1152&quality=high',
  twitterCreator: '@ftreports',
  tweetText: 'Now in its second year, the FT 1000 – compiled with Statista – shows tech remains king, and is creating thousands of jobs',
  twitterHeadline: 'The FT 1000: the complete list of Europe’s fastest-growing companies',

  // FACEBOOK
  facebookImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A8ed33e5a-38c4-11e8-b161-65936015ebc3?source=ig&width=2084&height=1152&quality=high',
  facebookHeadline: 'The FT 1000: the complete list of Europe’s fastest-growing companies',

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
