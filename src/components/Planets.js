import { useQuery } from 'react-query';
import Planet from './Planet';

const fetchPlanets = async () => {
  const res = await fetch('http://swapi.dev/api/planets/');
  return res.json();
};

const Planets = () => {
  const { data, status } = useQuery('planets', fetchPlanets, {
    // staleTime: 5000, how much time pass to consider old data
    // cacheTime: 5000, keep cache for 5 seconds
    // onSuccess: () => console.log('data fetched with no problemo')
  });

  return (
    <div>
      <h2>Planets</h2>

      {status === 'loading' && <div>Loading data...</div>}

      {status === 'error' && <div>Error fetching data</div>}

      {status === 'success' && (
        <div>
          {data.results.map((planet) => (
            <Planet key={planet.name} planet={planet} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Planets;
