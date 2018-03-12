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
  trekPriceFirst.textContent =
    '₹ ' +
    (
      trekSelect[trekSelect.selectedIndex].getAttribute('per-person-first') *
      trekPersons.value
    ).toLocaleString(undefined, {
      minimumFractionDigits: 0
    }) +
    ` (${trekSelect[trekSelect.selectedIndex].getAttribute('duration-first')})`;

  trekPriceSecond.textContent =
    '₹ ' +
    (
      trekSelect[trekSelect.selectedIndex].getAttribute('per-person-second') *
      trekPersons.value
    ).toLocaleString(undefined, {
      minimumFractionDigits: 0
    }) +
    ` (${trekSelect[trekSelect.selectedIndex].getAttribute(
      'duration-second'
    )})`;
}
