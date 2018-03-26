export default () => ({ // eslint-disable-line

  // link file UUID
  id: 'cf0c5fce-3112-11e8-b5bf-23cb17fd1498',

  // canonical URL of the published page
  // https://ig.ft.com/special-reports/ft-1000/asia-pacific/2018/ get filled in by the ./configure script
  url: 'https://ig.ft.com/special-reports/ft-1000/europe/2018/',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date('2018-02-11T23:00:00Z'),

  headline: 'FT 1000: High-Growth Companies Europe',

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'Standfirst TK',

  topic: {
    name: 'FT 1000: High-Growth Companies Europe',
    url: '#',
  },

  relatedArticle: {
    text: 'Statista',
    url: 'https://www.statista.com/aboutus/',
  },

  mainImage: {
    title: 'FT 1000: High-Growth Companies Europe',
    description: 'FT 1000: High-Growth Companies Europe',
    url: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3Ac4eaada6-0c1a-11e8-bacb-2958fde95e5e?source=ig&width=2084&height=1152&quality=high',
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
  title: 'FT 1000: High-Growth Companies Europe',

  // meta data
  description: 'The FT 1000: High-growth companies in the Europe region',

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
  socialImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3Ac4eaada6-0c1a-11e8-bacb-2958fde95e5e?source=ig&width=700&quality=high',
  // socialHeadline: '',
  socialSummary: 'The FT 1000: High-growth companies in the Europe region',

  // TWITTER
  twitterImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3Ac4eaada6-0c1a-11e8-bacb-2958fde95e5e?source=ig&width=700&quality=high',
  twitterCreator: '@ftreports',
  tweetText: '',
  twitterHeadline: 'FT 1000: High-Growth Companies Europe',

  // FACEBOOK
  facebookImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3Ac4eaada6-0c1a-11e8-bacb-2958fde95e5e?source=ig&width=700&quality=high',
  facebookHeadline: 'FT 1000: High-Growth Companies Europe',

  // ADVERTISING
  ads: {
    // Ad unit hierarchy makes ads more granular.
    gptSite: 'ft.com',
    // Start with ft.com and /companies /markets /world as appropriate to your story
    gptZone: '/world/asia-pacific',
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
