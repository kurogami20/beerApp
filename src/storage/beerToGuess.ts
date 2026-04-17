import type { Beer } from '@/@types';
import { atom } from 'jotai';

export const beerToGuessAtom = atom<Beer | null>(null);
