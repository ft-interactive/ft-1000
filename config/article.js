export default () => ({ // eslint-disable-line

  // link file UUID
  id: '02cdcb40-01d9-11e8-9650-9c0ad2d7c5b5',

  // canonical URL of the published page
  // https://ig.ft.com/sites/ft-1000 get filled in by the ./configure script
  url: 'https://ig.ft.com/special-reports/ft-1000/asia-pacific/2018',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date('2018-02-12T05:00:00Z'),

  headline: 'FT 1000: High-Growth Companies Asia-Pacific',

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'The region’s technology companies lead the way, according to list compiled with',

  topic: {
    name: 'FT 1000: High-Growth Companies Asia-Pacific',
    url: 'https://www.ft.com/reports/ft1000-asia-pacific',
  },

  relatedArticle: {
    text: 'Statista',
    url: 'https://www.statista.com/aboutus/',
  },

  mainImage: {
    title: 'FT 1000: High-Growth Companies Asia-Pacific',
    description: 'FT 1000: High-Growth Companies Asia-Pacific',
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
  title: 'FT 1000: High-Growth Companies Asia-Pacific',

  // meta data
  description: 'FT 1000: High-Growth Companies Asia-Pacific',

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
  // socialSummary:  '',

  // TWITTER
  twitterImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3Ac4eaada6-0c1a-11e8-bacb-2958fde95e5e?source=ig&width=700&quality=high',
  twitterCreator: '@ftreports',
  tweetText: 'FT 1000: High-Growth Companies Asia-Pacific',
  twitterHeadline: 'FT 1000: High-Growth Companies Asia-Pacific',

  // FACEBOOK
  facebookImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3Ac4eaada6-0c1a-11e8-bacb-2958fde95e5e?source=ig&width=700&quality=high',
  facebookHeadline: 'FT 1000: High-Growth Companies Asia-Pacific',

  // ADVERTISING
  ads: {
    // Ad unit hierarchy makes ads more granular.
    gptSite: 'ft.com',
    // Start with ft.com and /companies /markets /world as appropriate to your story
    gptZone: 'companies/european',
    // granular targeting is optional and will be specified by the ads team
    dfpTargeting: "sr=FT 1000: Europe's Fastest Growing Companies",
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
