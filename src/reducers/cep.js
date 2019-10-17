const initialState = {
  isFetching: false,
  status: null,
  code: '',
  state: '',
  city: '',
  disctrict: '',
  address: '',
  erroMessage: null,
};

const UPDATE_ADDRESS = 'cep:UPDATE_ADDRESS';
const FETCHING = 'cep:FETCHING';

const cep = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        isFetching: true,
      };
    case UPDATE_ADDRESS:
      return {
        ...state,
        ...action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};

export const updateAddress = (address) => ({
  type: UPDATE_ADDRESS,
  payload: address,
});

export const fetchAddress = (cepcode) => async (dispatch) => {
  dispatch({ type: FETCHING });

  const result = await fetch(`http://apps.widenet.com.br/busca-cep/api/cep/${cepcode}.json`, { referrerPolicy: 'no-referrer' });
  const response = await result.json();

  if (typeof response !== 'object') return dispatch(updateAddress({ errorMessage: response }));

  dispatch(updateAddress({
    ...response,
    errorMessage: response.message,
  }));
};

export default cep;
