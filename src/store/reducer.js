import {
  SHOW_LOADER,
  HIDE_LOADER,
  SEARCH_TEXT,
  GET_ASTROID,
  SUBMIT_BTN,
  RANDOM_BTN,
  RESET_BTN,
} from './action';
import { random } from 'lodash';

const initialState = {
  astroidList: [],
  loader: false,
  searchText: '',
  selectedAstroid: {},
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_LOADER:
      return {
        ...state,
        loader: true,
      };

    case HIDE_LOADER:
      return {
        ...state,
        loader: false,
      };

    case SEARCH_TEXT:
      return {
        ...state,
        searchText: payload,
      };

    case SUBMIT_BTN: {
      const { astroidList, searchText } = state;
      const selected = astroidList.filter((data) => data.id === searchText);
      return { ...state, selectedAstroid: selected[0] };
    }

    case RANDOM_BTN: {
      let id = random(0, 19);
      console.log('id', id);
      return { ...state, searchText: state.astroidList[id].id };
    }

    case RESET_BTN: {
      return { ...state, selectedAstroid: {} };
    }
    case GET_ASTROID:
      return {
        ...state,
        astroidList: payload.near_earth_objects,
      };

    default:
      return state;
  }
};
export default reducer;
