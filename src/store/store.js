import { configureStore } from '@reduxjs/toolkit'
import map from '../components/map/sliceMap';


export default configureStore({
	reducer: map,
	devTools: process.env.NODE_ENV !== 'production'
})