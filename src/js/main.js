/* global LazyLoad */

var myLazyLoad = new LazyLoad();

let trekDetails = document.getElementById('trek-details');
let trekSelect = document.getElementById('trek-select');
let trekPrice = document.getElementById('trek-price');
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
  trekPrice.textContent =
    '₹ ' +
    (
      trekSelect[trekSelect.selectedIndex].getAttribute('per-person') *
      trekPersons.value
    ).toLocaleString(undefined, {
      minimumFractionDigits: 0
    });
}
