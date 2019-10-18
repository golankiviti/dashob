import { combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import { createStore } from 'redux';
import tabs from './tabs/reducer';

const rootReducer = combineReducers({
    tabs
});

const persistConfig = {
    transforms: [immutableTransform({
        whitelist: ['tabs']
      })],
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const persistor = persistStore(store)


export {
    store,
    persistor
}