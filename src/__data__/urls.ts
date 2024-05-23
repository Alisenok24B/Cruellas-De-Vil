import { getNavigationsValue, getConfigValue } from '@ijl/cli';
import { generatePath } from 'react-router-dom';

const baseUrl = getNavigationsValue('dog-sitters-finder.main');


export const URLs = {
    baseUrl,
    ui: {
        search: getNavigationsValue('dog-sitters-finder.search') && `${baseUrl}${getNavigationsValue('dog-sitters-finder.search')}`,
        register: getNavigationsValue('dog-sitters-finder.register') && `${baseUrl}${getNavigationsValue('dog-sitters-finder.register')}`,
        /*dogsitterViewing: {
            url: `${baseUrl}${getNavigationsValue('dog-sitters-finder.dogsitter.viewing')}`,
            on: Boolean(getNavigationsValue('dog-sitters-finder.dogsitter.viewing')),
            getUrl: (id: number) => generatePath(`${baseUrl}${getNavigationsValue('dog-sitters-finder.dogsitter.viewing')}`, { id })
          }*/
        dogsitterViewing: getNavigationsValue('dog-sitters-finder.dogsitter.viewing') && `${baseUrl}${getNavigationsValue('dog-sitters-finder.dogsitter.viewing')}`
    },
    api: {
        main: getConfigValue('dog-sitters-finder.api')
    }
}