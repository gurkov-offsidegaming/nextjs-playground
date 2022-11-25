const axios = require('axios')
module.exports = {
  locales: [ 'en-GB', 'ca-CA', 'es-ES' ],
  defaultLocale: 'en-GB',
  pages: {
    '*': [ 'common' ],
  },
  loadLocaleFrom: (locale, namespace) => {
    const promise = axios.get(`https://gptest:gptest2015@new-portal-test.offsidegaming.com/offside-portal/rest/translationmanager/sports-menu,coupons,psp,balances-transfers,promotions,timezones/${locale}/31`).then(
      response => {
        const result = {}
        Object.keys(response.data).forEach(key => {
          result[key] = response.data[key][locale]
        })
        return result
      }
    )
    return promise
  },
}
