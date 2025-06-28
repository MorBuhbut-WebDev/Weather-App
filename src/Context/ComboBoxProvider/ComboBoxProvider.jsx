import { createContext, useContext, useReducer } from "react";

const ComboBoxContext = createContext();

export const useComboBoxContext = () => useContext(ComboBoxContext);

export default function ComboBoxProvider({ children }) {
  const [comboBoxState, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "UPDATE_SEARCH_TERM":
          return { ...state, searchTerm: action.payload };

        case "UPDATE_SUGGESTION_LIST":
          return { ...state, citiesSuggestions: action.payload };

        default:
          return state;
      }
    },
    {
      citiesSuggestions: [],
      searchTerm: "",
    }
  );

  return (
    <ComboBoxContext.Provider value={{ comboBoxState, dispatch }}>
      {children}
    </ComboBoxContext.Provider>
  );
}
