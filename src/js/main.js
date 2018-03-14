/* global LazyLoad */

var myLazyLoad = new LazyLoad();

let trekDetails = document.getElementById('trek-details');
let trekSelect = document.getElementById('trek-select');
let trekPriceFirst = document.getElementById('trek-price-first');
let trekPriceSecond = document.getElementById('trek-price-second');
let trekPersons = document.getElementById('trek-persons');

trekSelect.addEventListener('change', () => {
  Array.prototype.forEach.call(trekDetails.childNodes, item => {
    item.style.display = 'none';
  });
  trekDetails.children[trekSelect.value].style.display = '';
  CalculateTrekPrice();
});

CalculateTrekPrice();

function CalculateTrekPrice () {
  let discountPercent = 0;

  if (trekPersons.value > 4) {
    discountPercent = 5;
  } else if (trekPersons.value > 9) {
    discountPercent = 10;
  }
  trekPriceFirst.textContent =
    '₹ ' +
    (
      trekSelect[trekSelect.selectedIndex].getAttribute('per-person-first') *
      trekPersons.value *
      ((100 - discountPercent) / 100)
    ).toLocaleString(undefined, {
      minimumFractionDigits: 0
    }) +
    ` (${trekSelect[trekSelect.selectedIndex].getAttribute('duration-first')})`;

  if (trekSelect[trekSelect.selectedIndex].getAttribute('per-person-second')) {
    trekPriceSecond.textContent =
      '₹ ' +
      (
        trekSelect[trekSelect.selectedIndex].getAttribute('per-person-second') *
        trekPersons.value *
        ((100 - discountPercent) / 100)
      ).toLocaleString(undefined, {
        minimumFractionDigits: 0
      }) +
      ` (${trekSelect[trekSelect.selectedIndex].getAttribute(
        'duration-second'
      )})`;
  } else {
    trekPriceSecond.textContent = '';
  }
}
