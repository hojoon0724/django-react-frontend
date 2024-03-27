// import our pet component
import Pet from '../components/Pet';
import { useLoaderData, Form } from 'react-router-dom';

export default function Index(props) {
  const allPets = useLoaderData();

  return (
    <>
      <h1>Add a turtle</h1>
      <Form action="/create" method="post" u>
        <label htmlFor="name">
          <input type="text" name="name" id="name" />
        </label>
        <label htmlFor="age">
          <input type="number" name="age" id="age" />
        </label>
        <button type="submit">submit</button>
      </Form>
      <hr />
      {allPets.map((pet, i) => (
        <Pet pet={pet} key={i} />
      ))}
    </>
  );
}
