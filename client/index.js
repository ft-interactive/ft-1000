/*
  TODO: delete this comment

  This file is where you bootstrap your JS code
  For example import stuff here:

  import {select} from 'd3-selection';
  import myComponent from './components/my-component';

  Split logical parts of you project into components e.g.

  /client
    - /components
        - /component-name
            - styles.scss
            - index.js
            - template.html

*/

import $ from 'jquery';
import tablesort from 'tablesort';

$('.search').keyup(function () {
  var _this = this;
        // Show only matching TR, hide rest of them
  $.each($('.sortable tbody tr'), function () {
    if ($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
      $(this).hide();
    else
      $(this).show();
  });
});

tablesort(document.querySelector('.sortable'), {
  // descending: true,
});