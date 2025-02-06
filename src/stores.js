// src/stores.js
import { writable } from 'svelte/store';

export const scout_id_store = writable("");
export const team_number_store = writable(0);
export const match_number_store = writable(0);
export const team_position_store = writable(0);

export const team_color_store = writable("");
