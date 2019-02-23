const initialState = {
  property_name: "",
  address: "",
  city: "",
  state: "",
  zip: 0,
  image_url: "",
  monthly_mortgage_amount: "",
  desired_rent: ""
};

// const ACTION_NAME = "ACTION_NAME";

const CHANGE_PROPERTY_NAME = "CHANGE_NAME";
const CHANGE_ADDRESS = "CHANGE_ADDRESS";
const CHANGE_CITY = "CHANGE_CITY";
const CHANGE_STATE = "CHANGE_STATE";
const CHANGE_ZIP = "CHANGE_ZIP";
const CHANGE_IMAGE_URL = "CHANGE_IMAGE_URL";
const CHANGE_MONTHLY_MORTGAGE_AMOUNT = "CHANGE_MONTHLY_MORTGAGE_AMOUNT";
const CHANGE_DESIRED_RENT = "CHANGE_DESIRED_RENT";
const CANCEL_ALL_CHANGES = "CANCEL_ALL_CHANGES";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PROPERTY_NAME:
      //   console.log(action.payload);
      return Object.assign({}, state, { property_name: action.payload });
    case CHANGE_ADDRESS:
      //   console.log(action.payload);
      return Object.assign({}, state, { address: action.payload });
    case CHANGE_CITY:
      //   console.log(action.payload);
      return Object.assign({}, state, { city: action.payload });
    case CHANGE_STATE:
      //   console.log(action.payload);
      return Object.assign({}, state, { state: action.payload });
    case CHANGE_ZIP:
      //   console.log(action.payload);
      return Object.assign({}, state, { zip: action.payload });
    case CHANGE_IMAGE_URL:
      //   console.log(action.payload);
      return Object.assign({}, state, { image_url: action.payload });
    case CHANGE_MONTHLY_MORTGAGE_AMOUNT:
      //   console.log(action.payload);
      return Object.assign({}, state, {
        monthly_mortgage_amount: action.payload
      });
    case CHANGE_DESIRED_RENT:
      //   console.log(action.payload);
      return Object.assign({}, state, { desired_rent: action.payload });
    case CANCEL_ALL_CHANGES:
      return Object.assign({}, state, initialState);
    default:
      return state;
  }
}

export function changePropertyName(payload) {
  return { payload, type: CHANGE_PROPERTY_NAME };
}

export function changeAddress(payload) {
  return { payload, type: CHANGE_ADDRESS };
}

export function changeCity(payload) {
  return { payload, type: CHANGE_CITY };
}

export function changeState(payload) {
  return { payload, type: CHANGE_STATE };
}

export function changeZip(payload) {
  return { payload, type: CHANGE_ZIP };
}

export function changeImageURL(payload) {
  return { payload, type: CHANGE_IMAGE_URL };
}

export function changeMonthlyMortgage(payload) {
  return { payload, type: CHANGE_MONTHLY_MORTGAGE_AMOUNT };
}

export function changeDesiredRent(payload) {
  return { payload, type: CHANGE_DESIRED_RENT };
}

export function cancel(payload) {
  return { payload, type: CANCEL_ALL_CHANGES };
}

// export function action() {
//   return {
//     type: ACTION_NAME
//   };
// }
