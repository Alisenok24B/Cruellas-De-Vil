import { getNavigationValue, getConfigValue } from '@brojs/cli';
// import { generatePath } from 'react-router-dom';

const baseUrl = getNavigationValue('dog-sitters-finder.main');


export const URLs = {
    baseUrl,
    ui: {
        search: getNavigationValue('dog-sitters-finder.search') && `${baseUrl}${getNavigationValue('dog-sitters-finder.search')}`,
        register: getNavigationValue('dog-sitters-finder.register') && `${baseUrl}${getNavigationValue('dog-sitters-finder.register')}`,
        /*dogsitterViewing: {
            url: `${baseUrl}${getNavigationsValue('dog-sitters-finder.dogsitter.viewing')}`,
            on: Boolean(getNavigationsValue('dog-sitters-finder.dogsitter.viewing')),
            getUrl: (id: number) => generatePath(`${baseUrl}${getNavigationsValue('dog-sitters-finder.dogsitter.viewing')}`, { id })
          }*/
        dogsitterViewing: getNavigationValue('dog-sitters-finder.dogsitter.viewing') && `${baseUrl}${getNavigationValue('dog-sitters-finder.dogsitter.viewing')}`
    },
    api: {
        main: getConfigValue('dog-sitters-finder.api')
    }
}