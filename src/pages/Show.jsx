import { useLoaderData, Link } from 'react-router-dom';

export default function Show(props) {
  const aPet = useLoaderData();
  return (
    <div>
      <h1>{aPet.name}</h1>
      <h2>{aPet.age}</h2>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}
