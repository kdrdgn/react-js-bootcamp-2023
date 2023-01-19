import { Action, configureStore, createAsyncThunk, createSlice, PayloadAction, ThunkAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

interface AppState {
    counter: number,
    darkMode: boolean,
    galleryImages: Array<any>,
    status: string
}

const initialState: AppState = {
    counter: 0,
    darkMode: true,
    galleryImages: [],
    status: 'idle'
}

export const loadGalleryImagesAsync = createAsyncThunk('application/loadGalleryImage', async () => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10&page=1');
    const data = await response.json();
    return data;
})

const appSlice = createSlice({
    name: 'applicationData',
    initialState,
    reducers: {
        updateCounter: (state, action: PayloadAction<any>) => {
            const newCounterValue = action.payload;
            state.counter = state.counter + newCounterValue;
        },
        resetCounter: (state) => {
            state.counter = 0;
        },
        changeTheme:  (state) => {
            state.darkMode = !state.darkMode;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loadGalleryImagesAsync.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(loadGalleryImagesAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            console.log('gallery images', action.payload);
            state.galleryImages = action.payload;
        })
        .addCase(loadGalleryImagesAsync.rejected, (state) => {
            state.status = 'rejected';
        })
    }
});

const appReducer = appSlice.reducer;

export const { updateCounter, resetCounter, changeTheme } = appSlice.actions;


const store = configureStore({
    reducer: {
        app: appReducer
    }
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
