const elSiteThemeToggler = document.querySelector('.site-header-theme-toggler');

elSiteThemeToggler.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
})

// search by nama

const formInput = document.querySelector('.filters-search-input');

formInput.addEventListener('input', () => {
  const inputValue = formInput.value.toLowerCase()
  const name = document.querySelectorAll('.index-country-name');

  name.forEach((item) => {
    if(item.textContent.toLowerCase().includes(inputValue)) {
      item.parentElement.parentElement.classList.remove('hidden')
    } else {
      item.parentElement.parentElement.classList.add('hidden')
    }
  })
})



// get result and update UI

const countryList = document.querySelector('.index-countries-list')

const updateUI = (data) => {
  countryList.innerHTML = '';
  data.forEach((item) => {
    const {flags, name, population, region, capital} = item;
    countryList.innerHTML += `
    <li class="index-xountries-item">
    <img src="${flags.png}" alt="${flags.alt}" class="index-country-flag" width="264" height="160">
    <div class="index-country-info">
      <h3 class="index-country-name">
        <a href="country.html" class="index-country-link">
          ${name.common}
        </a>
        </h3>
      <dl class="index-country-details">
        <div class="index-country-details-item">
          <dt class="index-country-details-title">Population:</dt>
          <dd class="index-country-details-value">${population}</dd>
        </div>
        <div class="index-country-details-item">
          <dt class="index-country-details-title">Region:</dt>
          <dd class="index-country-details-value">${region}</dd>
        </div>
          <div class="index-country-details-item">
            <dt class="index-country-details-title">Capital:</dt>
            <dd class="index-country-details-value">${capital}</dd>
          </div>
        </dl>
      </div>
    </li>

    `
  })


}
