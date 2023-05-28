import { useQuery } from 'urql';
import FactoryTable from '../Components/FactoryTable';
import Spinner from '../Components/common/Spinner';
import query from '../graphql/query';

/**
 * App Component
 * @returns 
 */
function Home() {
  // execute query
  const [result] = useQuery({ query });
  const { data, fetching, error } = result;

  return (
    <div className="App">
      <header className="App-header">
        {fetching ?
          <Spinner/>
        : 
          <>{data !== undefined && <FactoryTable data={data} />}</>
        }
      </header>
    </div>
  );
}

export default Home;
