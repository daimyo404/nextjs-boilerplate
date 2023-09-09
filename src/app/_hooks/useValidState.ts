import { useEffect, useState } from "react";

const useValidState = (initialState: any, regex: any) => {
  const [state, setState] = useState(initialState);
  const [isValid, setIsValid] = useState(true);
  useEffect(() => {
    regex.test(state) ? setIsValid(true) : setIsValid(false);
  }, [state]);
  return [state, setState, isValid];
};

export default useValidState;
