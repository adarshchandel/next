import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
//reducers
import loggedInUser from './user/userSlice';

const userPersistConfig = {
    key: 'user',
    storage,
    whitelist: ['isLoggedIn', 'user', 'token', 'userData'], // only persist these keys
};

const persistedUserReducer = persistReducer(userPersistConfig, loggedInUser);


const rootReducer = {
    loggedInUser:persistedUserReducer
}

export default rootReducer;