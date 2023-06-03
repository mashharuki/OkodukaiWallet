import { useState } from 'react';
import { useQuery } from 'urql';
import FactoryTable from '../Components/FactoryTable';
import Spinner from '../Components/common/Spinner';
import query from '../graphql/query';

/**
 * App Component
 * @returns 
 */
function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // execute query
  const [result] = useQuery({ query });
  const { data, fetching, error } = result;

  return (
    <div className="App">
      <header className="App-header">
        {fetching ?
          <Spinner/>
        : 
          <>
            {isLoading ? 
              <Spinner/>
            :
              <>{data !== undefined && <FactoryTable data={data} setIsLoading={setIsLoading} />}</>
            }
          </>
        }
      </header>
    </div>
  );
}

export default Home;
