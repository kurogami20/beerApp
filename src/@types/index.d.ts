export type Beer = {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image: string;
  abv: number;
  ibu: number | null;
  target_fg: number | null;
  target_og: number | null;
  ebc: number | null;
  srm: number | null;
  ph: number | null;
  attenuation_level: number | null;
  volume: {
    value: number;
    unit: string;
  };
  boil_volume: {
    value: number;
    unit: string;
  };
  method: {
    mash_temp: {
      temp: {
        value: number | null;
        unit: string;
      };
      duration: number | null;
    }[];
    fermentation: {
      temp: {
        value: number | null;
        unit: string;
      };
    };
    twist: string | null;
  };
  ingredients: {
    malt: {
      name: string;
      amount: {
        value: number;
        unit: string;
      };
    }[];
    hops: {
      name: string;
      amount: {
        value: number;
        unit: string;
      };
      add: string;
      attribute: string | null;
    }[];
    yeast: string | null;
  };
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
};
