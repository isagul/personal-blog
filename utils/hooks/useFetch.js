import { useState, useEffect, useRef } from 'react';

export const useFetch = url => {
  const [state, setState] = useState({ data: null, loading: true });
  const isComponentMounted = useRef(true);

  useEffect(() => {
    fetch(url)
      .then(function (res) { return res.json(); })
      .then(function (response) {
        if (response.status === "ok") {
          if (isComponentMounted.current) {
            setState({ data: response, loading: false });
          }
        }
      })
    return (() => {
      isComponentMounted.current = false;
    })
  }, [url, setState]);

  return state;
};