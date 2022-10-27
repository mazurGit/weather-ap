import {useContext} from 'react';
import {StoreContext, store} from '~/store/store';
import {Store} from '~/common/types/store';

export const useStore = () =>{
  return useContext<Store>(StoreContext);
}

export {store};
