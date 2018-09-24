import $ from 'jquery';
import Tablesort from 'tablesort';

// Taken and rewritten from https://github.com/tristen/tablesort/blob/gh-pages/src/sorts/tablesort.number.js
(function sortNumber() {
  const cleanNumber = i => i.replace(/[^\-?0-9.]/g, '');

  const compareNumber = (a, b) => {
    const floatA = parseFloat(a);
    const floatB = parseFloat(b);

    return (isNaN(floatA) ? 0 : floatA) - (isNaN(floatB) ? 0 : floatB);
  };

  const suffixedCurrency = /^-?\d+\s*([,.]\d{0,2})?[£\x24Û¢´€]/; // Suffixed currency
  const numberRegex = /^-?(\d)*-?([,.]){0,1}-?(\d)+([E,e][-+][\d]+)?%?$/; // General number
  const prefixed = /^-?[£\x24Û¢´€]?\d+\s*([,.]\d{0,2})/; // Prefixed currency

  Tablesort.extend(
    'number',
    item => prefixed.test(item) || suffixedCurrency.test(item) || numberRegex.test(item),
    (a, b) => compareNumber(cleanNumber(b), cleanNumber(a)),
  );
}());

(function sortNumberNA() {
  const cleanNumber = i => i.replace(/[^\-+?0-9.]/g, '');
  const compareNumber = (a, b) => {
    if (a === 'n/a' || a === '-') a = Number(0); // eslint-disable-line
    else if (b === 'n/a' || b === '-') b = Number(0); // eslint-disable-line

    const floatA = parseFloat(a);
    const floatB = parseFloat(b);

    return (isNaN(floatA) ? 0 : floatA) - (isNaN(floatB) ? 0 : floatB);
  };

  const suffixedCurrency = /^-?\d+\s*([,.]\d{0,2})?[£\x24Û¢´€]/; // Suffixed currency
  const numberRegex = /^[-+]?(\d)*-?([,.]){0,1}-?(\d)+([E,e][-+][\d]+)?%?$/; // General number
  const prefixed = /^-?[£\x24Û¢´€]?\d+\s*([,.]\d{0,2})/; // Prefixed currency

  Tablesort.extend(
    'number-na',
    item => prefixed.test(item) || suffixedCurrency.test(item) || numberRegex.test(item),
    (a, b) => compareNumber(cleanNumber(b), cleanNumber(a)),
  );
}());

(function sortCategory() {
  const compareCategory = (a, b) => {
    if (a === '') return 1;
    if (b === '') return -1;
    if (a === b) return 0;

    return a.localeCompare(b);
  };

  Tablesort.extend(
    'category',
    item => item,
    (a, b) => compareCategory(a, b),
  );
}());

$('.search').keyup(function searchKeyup() {
  const el = this;
  // Show only matching TR, hide rest of them
  $.each($('.sortable tbody tr'), function handleSearch() {
    if (
      $(this)
        .text()
        .toLowerCase()
        .indexOf(
          $(el)
            .val()
            .toLowerCase(),
        ) === -1
    ) {
      $(this).hide();
    } else {
      $(this).show();
    }
  });
});

Tablesort(document.querySelector('.sortable'), {
  // descending: true,
});
