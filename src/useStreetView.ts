import { useEffect, useState } from 'react';

const URL = 'https://tile.googleapis.com/tile/v1/createSession';

export const useStreetView = (key: string) => {
  const [status, setStatus] = useState<string>('idle');
  const [data, setData] = useState<unknown>(null);
  const [error, setError] = useState<Error | null>(null);
  const url = `${URL}?key=${key}`;

  useEffect(() => {
    setStatus('pending');
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        mapType: 'streetview',
        language: 'nl-BE',
        region: 'BE',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setStatus('resolved');
        setData(data);
      })
      .catch((error) => {
        console.error(error);
        setStatus('rejected');
        setError(error);
      });
  }, [url]);

  return { status, data, error };
};
