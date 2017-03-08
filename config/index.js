import axios from 'axios';

import article from './article';
import getFlags from './flags';
import getOnwardJourney from './onward-journey';

export default async () => {
  const d = await article();
  const flags = await getFlags();
  const onwardJourney = await getOnwardJourney();
  /*
  An experimental demo that gets content from the API
  and overwrites some model values. This requires the Link File
  to have been published. Also next-es-interface.ft.com probably
  isn't a reliable source. Also this has no way to prevent development
  values being seen in productions... use with care.

  */

  try {
    const table = (await axios('https://bertha.ig.ft.com/view/publish/gss/1sLtLlvhaCDBgGSNskJPdKdkWJFwFNq0Er6GMGaEbt9c/data')).data;
  return {
    ...d,
    flags,
    onwardJourney,
    table
  };
  } catch (e) {
    console.log('Error getting content from Bertha');
  }


};
