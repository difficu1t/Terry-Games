'use client'
import { useEffect, useMemo } from 'react';
import { useBoardGamesActions } from '@/utils/hooks/useBoardGamesActions';
import { useTypedSelector } from '@/utils/hooks/useTypedSelector';

export default function Template({ children }: { children: React.ReactNode }) {

  const { users } = useTypedSelector(state => state.users);
  const { calculateRating } = useBoardGamesActions();
  const { changeBoardGameRating } = useBoardGamesActions();

  useEffect(() => {
    calculateRating(users);
  }, [changeBoardGameRating])


  return <div>{children}</div>
}