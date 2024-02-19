const API = 'https://restcountries.com/v3.1/all';

// request data
const getData = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
      if(request.readyState == 4 && request.status == 200) {
        const data = JSON.parse(request.responseText);
        resolve(data)
        console.log(data);
      } else if (request.readyState == 4) {
        reject("Error !!!")
      }
    })
    request.open('GET', resource)
    request.send()
  })
}

const reload = () => {
  getData(API).then((data) => {
    updateUI(data)
  })
}



document.addEventListener('DOMContentLoaded', reload)
