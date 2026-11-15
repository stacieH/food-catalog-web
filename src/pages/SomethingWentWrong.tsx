import React from 'react';
import { UserContext } from '../components/MyContext';

function SomethingWentWrong() {
  const context = React.useContext(UserContext);
  const WentWrongImg = context.images?.something_went_wrong;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: ' calc(100dvh - 79.88px)',
      }}
    >
      <img
        src={WentWrongImg}
        alt="Something went wrong"
        width="25%"
        height="25%"
        style={{
          height: '150px',
          width: 'auto',
        }}
      />
      <span>
        <h2>Something went wrong</h2>
        <small>Feel free to contact us, if refreshing doesn&apos;t work.</small>
      </span>
    </div>
  );
}

export default SomethingWentWrong;
