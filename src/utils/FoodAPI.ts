import axios from 'axios';

type Food = {
  id: string;
  image: string;
  label: string;
  source: string;
};

export const getFoods = async (): Promise<Array<Food>> => {
  try {
    const base_url = import.meta.env.VITE_API_URL;
    const response = await axios({
      url: `${base_url}/data/foods.json`,
    });

    const data = response?.data || {};

    if (data.success === false) {
      throw new Error('error catching foods');
    }

    const hits = data?.data?.hits || [];

    const foods = await hits.map((d: any) => {
      const { recipe } = d;
      if (recipe) {
        const { image, label, source } = recipe;
        return { id: recipe.id, image, label, source };
      }
      return { id: '', image: '', label: '', source: '' };
    });

    return foods;
  } catch (err) {
    console.error('Error fetching foods:', err);
    throw new Error('error catching foods');
  }
};
