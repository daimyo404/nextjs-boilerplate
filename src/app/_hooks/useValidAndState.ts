import { useEffect, useState } from "react";

const useValidAndState = <T>(initialState: T, regex: any) => {
  const [state, setState] = useState<T>(initialState);
  const [isValid, setIsValid] = useState<boolean>(true);

  useEffect(() => {
    regex.test(state) ? setIsValid(true) : setIsValid(false);
  }, [state, regex]);

  return [setState, isValid] as const;
};

export default useValidAndState;
