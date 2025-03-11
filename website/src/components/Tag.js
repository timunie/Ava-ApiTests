import React from 'react';

export default function Tag({children}, type = 'is-warning') {
  return (
    <div className={'tag '.concat(type)}>
      {children}
    </div>
  );
}