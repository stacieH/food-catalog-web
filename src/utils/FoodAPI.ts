import axios from 'axios';

type Food = {
  id: string;
  image: string;
  label: string;
  source: string;
};

type Catalog = {
  name: string,
  _id: string,
  image_urls: Array<{url: string}>
}

export const getFoods = async (): Promise<Array<Food>> => {
  try {
    const base_url = import.meta.env.VITE_API_URL;

    const response = await axios({
      baseURL: base_url,
      url: `/products/catalogs`,
    });

    const data = response?.data || {};

    if (data.success === false) {
      throw new Error('error catching foods');
    }

    const dummyImage = 'https://static.vecteezy.com/system/resources/previews/022/059/000/non_2x/no-image-available-icon-vector.jpg'
    const hits = data?.data || [];

    const foods = await hits.map((recipe: Catalog) => {
      if (recipe) {
        return { id: recipe?._id, image:recipe.image_urls?.[0]?.url||dummyImage, label: recipe?.name, source:"" };
      }
      return { id: '', image: dummyImage, label: '', source: '' };
    });

    return foods;
  } catch (err) {
    console.error('Error fetching foods:', err);
    throw new Error('error catching foods', { cause: err });
  }
};
