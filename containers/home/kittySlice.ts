import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type KittyImage = {
  id: string;
  url: string;
  height: number;
  width: number;
};

export type Kitty = {
  id: string;
  name: string;
  description: string;
  image: KittyImage;
  life_span?: string;
  alt_names?: string;
  origin?: string;
};

export type APIParams = {
  limit: number;
  page: number;
};

export interface KittyState {
  kitties: Array<Kitty>;
  isPending: boolean;
  error: string;
}

const initialState: KittyState = {
  isPending: false,
  kitties: [],
  error: ''
};

const mapKittyData = (data: { [key: string]: any }[]) => {
  return data.map((kitty: { [key: string]: any }) => {
    return {
      id: kitty.id,
      name: kitty.name,
      description: kitty.description.substr(0, 80) + '...',
      life_span: kitty.life_span,
      alt_names: kitty.alt_names,
      origin: kitty.origin,
      image: {
        id: kitty.image.id,
        url: kitty.image.url,
        height: kitty.image.height,
        width: kitty.image.width
      }
    };
  });
};

export const getKittiesAsync = createAsyncThunk(
  'kitty/fetchKitties',
  async ({ page, limit }: APIParams, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.thecatapi.com/v1/breeds?page=${page}&limit=${limit}`,
        {
          headers: {
            'x-api-key': process.env.CAT_API_KEY || ''
          }
        }
      );
      const data = await response.json();
      // Will become the `fulfilled` action payload
      return mapKittyData(data);
    } catch (e) {
      return rejectWithValue('Something went wrong.');
    }
  }
);

// Create kitty slice
export const kittySlice = createSlice({
  name: 'kitty',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getKittiesAsync.pending, (state) => {
        state.isPending = true;
      })
      .addCase(getKittiesAsync.fulfilled, (state, action) => {
        state.isPending = false;
        state.kitties = action.payload;
      })
      .addCase(getKittiesAsync.rejected, (state, action) => {
        state.isPending = false;
        state.error = String(action.payload);
      });
  }
});

export const selectKitty = (state: RootState) => state.kitty;

export default kittySlice.reducer;
