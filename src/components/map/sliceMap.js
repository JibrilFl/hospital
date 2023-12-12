import {createAsyncThunk, createEntityAdapter, createSlice, createSelector} from '@reduxjs/toolkit'
// import {useHttp} from "../../hook/http.hook";
import Data from '../../db';

const mapAdapter = createEntityAdapter({
	selectId: (map) => map.id
});

const initialState = mapAdapter.getInitialState({
	currentFloor: null,
	currentRoom: '',
	mapLoadingStatus: 'loading',
	room: {},
	activeEquipment: ''
})


export const fetchMap = createAsyncThunk(
	'map/fetchMap',
	async () => {
		return Data;
		// const {request} = useHttp();
		// return await request('https://node-test-myhx.onrender.com/api/users');


	}
)

export const mapSlice = createSlice({
	name: 'map',
	initialState,
	reducers: {
		onCurrentFloor: (state, action) => {
			return {
				...state,
				currentFloor: action.payload
			}
		},
		onCurrentRoom: (state, action) => {
			return {
				...state,
				currentRoom: action.payload
			}
		},
		addRoom: (state, action) => {
			return {
				...state,
				room: action.payload
			}
		},
		addEquipment: (state, action) => {
			return {
				...state,
				activeEquipment: action.payload
			}
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMap.pending, state => {
				return {
					...state,
					mapLoadingStatus: 'loading'
				}
			})
			.addCase(fetchMap.fulfilled, (state, action) => {
				state.mapLoadingStatus = 'idle';
				mapAdapter.setAll(state, action.payload);

			})
			.addCase(fetchMap.rejected, state => {
				return {
					...state,
					mapLoadingStatus: 'error'
				}
			})
			.addDefaultCase(() => { })
	}
})

const { actions, reducer } = mapSlice;

export default reducer;

export const { selectAll, selectIds, selectById} = mapAdapter.getSelectors();

export const getCategoriesState = (rootState) => rootState

export const selectFloor = (id) => {
	return createSelector(getCategoriesState, (state) => selectById(state, id));
}

export const {
	onCurrentFloor,
	onCurrentRoom,
	addRoom,
	addEquipment,
	mapFetching,
	mapFetched,
	mapFetchingError,
} = actions;