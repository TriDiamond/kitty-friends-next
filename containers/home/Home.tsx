import React, { useCallback, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  setSearchField,
  selectSearchField
} from '../../components/searchBox/searchSlice';
import { getKittiesAsync, selectKitty, Kitty } from './kittySlice';
import SearchBox from '../../components/searchBox/SearchBox';
import CardList from '../../components/card/CardList';
import Title from '../../components/title/Title';

const Home = () => {
  const searchField = useAppSelector(selectSearchField);
  const { kitties, isPending } = useAppSelector(selectKitty);
  const dispatch = useAppDispatch();

  // `Dispatch` comes from a custom `hook`, so it doesn't have an stable
  // signature and it will change on each render (reference equality)
  // Add an aditional layer of dependencies by wrapping the hanlder inside a `useCallback` hook
  const stableDispatch = useCallback(dispatch, [dispatch]);

  // Mounted life cycle
  useEffect(() => {
    stableDispatch(
      getKittiesAsync({
        limit: 16,
        page: 0
      })
    );
  }, [stableDispatch]);

  const filteredKitties = kitties.filter((kitty: Kitty) => {
    return kitty.name.toLowerCase().includes(searchField.toLowerCase());
  });

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setSearchField(event.target.value));
  };

  return (
    <>
      {/* <GithubCorner href="https://github.com/TriDiamond/kitty-friends-typescript" /> */}
      <div className="flex flex-col justify-center items-center my-6">
        {isPending ? (
          <>
            <Title context="Loading..." />
          </>
        ) : (
          <>
            <Title context="Kitty Friends" />
          </>
        )}
        <SearchBox searchChange={onSearchChange} />
      </div>
      <CardList data={filteredKitties} />
    </>
  );
};

export default Home;
