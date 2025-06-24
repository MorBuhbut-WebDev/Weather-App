import { useState, useEffect } from "react";
import { fetchGeoLocation } from "../../../Api/weatherApi.js";

export function useDebounce(value) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, 500);

    return () => clearTimeout(timerId);
  }, [value]);

  return debouncedValue;
}

export function useSuggestions(
  debouncedSearchTerm,
  emptySearchBar,
  setCitiesSuggestions
) {
  useEffect(() => {
    const getSuggestions = async () => {
      const suggestions = await fetchGeoLocation(debouncedSearchTerm);
      setCitiesSuggestions(suggestions);
    };

    if (!emptySearchBar) getSuggestions();
  }, [debouncedSearchTerm]);
}

export function useCloseSuggestions(searchBarRef, setCitiesSuggestions) {
  useEffect(() => {
    const handleClick = (e) => {
      if (e.target === searchBarRef.current) return;
      setCitiesSuggestions([]);
    };

    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, []);
}
