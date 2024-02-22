import type { FC, ReactNode } from 'react';

interface IPageWrapper {
  children: ReactNode;
}

export const PageWrapper: FC<IPageWrapper> = ({ children }) => (
  <div className="flex flex-col items-center justify-center h-screen">
    {children}
  </div>
);
