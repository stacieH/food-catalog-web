import React, { use, Suspense } from 'react';

import FoodList from '../components/FoodList';
import { ChatPortal } from '../components/ChatPortal';
import LoadingCard from '../components/LoadingCard';

import * as API from '../utils/FoodAPI';
import ErrorBoundary from '../components/ErrorBoundary';

function Main() {
  const emptyCard = Array(10)
    .fill(' ')
    .map((x, index) => <LoadingCard key={index} />);

  return (
    <ErrorBoundary>
      <Suspense fallback={<div className="card-container">{emptyCard}</div>}>
        <FoodList foodsPromise={API.getFoods()} />
        <ChatPortal />
      </Suspense>
    </ErrorBoundary>
  );
}

export default Main;
