import React from 'react';
import { Outlet } from 'react-router-dom';

export function Pokemon() {
  return (
    <div>
      <Outlet />
      {/* <Route path="*" element={<Navigate to={`${ROUTES.POKEMON}/${ROUTES.MUI}`} />} /> */}
    </div>
  );
}
