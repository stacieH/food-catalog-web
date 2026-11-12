import React, {
  Fragment,
  useCallback,
  useEffect,
  useState,
  useTransition,
} from 'react';

import Card from '../components/Card';
import { ChatPortal } from '../components/ChatPortal';
import LoadingCard from '../components/LoadingCard';

import * as API from '../utils/API';

type Food = {
  id: string;
  image: string;
  label: string;
  source: string;
};

function Main() {
  const [foods, setFoods] = useState<Array<Food>>([]);
  const [showErrorScreen, setShowErrorScreen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const getFoodie = useCallback(async () => {
    try {
      const res = await API.getFoods();
      const { hits } = res;

      const foods = await hits.map((d) => {
        const { recipe } = d;
        if (recipe) {
          const { image, label, source } = recipe;
          return { id: recipe.id, image, label, source };
        }
        return { id: '', image: '', label: '', source: '' };
      });

      await setFoods(foods);
      await setShowErrorScreen(false);
    } catch (err) {
      setShowErrorScreen(true);
    }
  }, []);

  useEffect(() => {
    startTransition(() => {
      getFoodie();
    });
  }, [getFoodie]);

  const emptyCard = Array(10)
    .fill(' ')
    .map((x, index) => <LoadingCard key={index} />);

  if (showErrorScreen) {
    throw new Error('error catching foods');
  }

  return (
    <Fragment>
      <div className="card-container">
        {isPending ? (
          emptyCard
        ) : foods.length > 0 ? (
          <Card foods={foods} />
        ) : (
          <></>
        )}
      </div>
      <ChatPortal />
    </Fragment>
  );
}

export default Main;
