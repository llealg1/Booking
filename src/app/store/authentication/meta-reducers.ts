import { ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: ['initialState'], // Las partes del estado que quieres guardar
    rehydrate: true, // Rehidratar al cargar la aplicación
  })(reducer);
}

export const metaReducers: MetaReducer<any>[] = [localStorageSyncReducer];
