const request = require('superagent');
const nothing = () => {};

request.get('https://www.foaas.com/cup/Josh')
  .then((res) => {
    console.log(res.text)
  })
  .then(nothing)
  .then(nothing)
  .then(nothing)
  .then(() => request.get('https://www.foaas.com/awesome/Danielle'))
  .then((res) => {
    console.log(res.text)
  })
  .catch(err => console.error(err))
