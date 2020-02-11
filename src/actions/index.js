//everything I want to save it in state it needs action creator
//save the value of action creator in payload

//action creator
export const firstName = firstName => {
  //action
  return {
    type: "FIRST_NAME",
    payload: firstName
  };
};

export const lastName = lastName => {
  // console.log(lastName);
  return {
    type: "LAST_NAME",
    payload: lastName
  };
};

//action creator ==> action ==> dispatch ==> reducer  ==>  store
