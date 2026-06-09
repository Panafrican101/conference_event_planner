import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    	{
		img: "https://www.istockphoto.com/en/photo/projector-lens-catches-dust-in-its-light-ray-macro-gm1210105656-350427802",
		name: "Projectors",
		cost: 200,
		quantity: 0,
	},
    {
		img: "https://pixabay.com/photos/music-speaker-bass-audio-sound-7603132/",
		name: "Speaker",
		cost: 35,
		quantity: 0,
    },
    {
		img: "https://pixabay.com/photos/mic-microphone-sound-check-sing-1132528/",
		name: "Microphones",
		cost: 45,
		quantity: 0,
    },
    {
		img: "https://www.istockphoto.com/it/foto/sala-conferenze-moderna-con-banner-e-laptop-gm980131044-266305025",
		name: "Whiteboards",
		cost: 80,
		quantity: 0,
    },

    {
		img: "https://www.istockphoto.com/en/photo/old-weathered-wood-signboard-gm155149525-18606475",
		name: "Signage",
		cost: 80,
		quantity: 0,
    },

  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item) {
            item.quantity++;
        }
    },
    
    decrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item && item.quantity > 0) {
            item.quantity--;
        }
    },
    
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
