import type { Beer } from '@/@types';
import { atom } from 'jotai';

export const beerChosenAtom = atom<Beer | null>(null);
