export default () => ({ // eslint-disable-line

  // link file UUID
  id: '',

  // canonical URL of the published page
  // https://ig.ft.com/sites/ft-1000 get filled in by the ./configure script
  url: 'https://ig.ft.com/sites/ft-1000',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date(),

  headline: 'The FT 1000: The complete list',

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'The complete list of Europe’s fastest-growing companies, compiled in association with Statista',

  topic: {
    name: 'FT 1000: Europe’s Fastest Growing Companies',
    url: 'https://www.ft.com/reports/europes-fastest-growing-companies',
  },

  relatedArticle: {
    text: 'Related article »',
    url: 'https://www.ft.com/reports/europes-fastest-growing-companies',
  },

  mainImage: {
    title: '',
    description: '',
    url: '',
    width: 2048, // ensure correct width
    height: 1152, // ensure correct height
  },

  // Byline can by a plain string, markdown, or array of authors
  // if array of authors, url is optional
  byline: [
    { name: 'Steve Bernard', url: 'https://www.ft.com/steve-bernard' },
    { name: 'Martin Stabe', url: 'https://www.ft.com/martin-stabe' },
    { name: 'Ændrew Rininsland', url: 'https://www.ft.com/%C3%A6ndrew-rininsland' },
  ],

  // Appears in the HTML <title>
  title: 'The FT1000 fastest-growing European companies',

  // meta data
  description: '',

  /*
  TODO: Select Twitter card type -
        summary or summary_large_image

        Twitter card docs:
        https://dev.twitter.com/cards/markup
  */
  twitterCard: 'summary',

  /*
  TODO: Do you want to tweak any of the
        optional social meta data?
  */
  // General social
  // socialImage: '',
  // socialHeadline: '',
  // socialSummary:  '',

  // TWITTER
  // twitterImage: '',
  // twitterCreator: '@individual's_account',
  // tweetText:  '',
  // twitterHeadline:  '',

  // FACEBOOK
  // facebookImage: '',
  // facebookHeadline: '',

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
