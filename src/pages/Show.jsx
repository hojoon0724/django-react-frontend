import { useLoaderData, Link, Form } from 'react-router-dom';

export default function Show(props) {
  const aPet = useLoaderData();
  // optional chaining > ?.
  const id = aPet?.url.split('/')[4];
  return (
    <div>
      <h1>{aPet.name}</h1>
      <h2>{aPet.age}</h2>

      <div>
        <Form action={`/update/${id}/`} method="post">
          <label htmlFor="name">
            Rename
            <input type="text" name="name" id="name" defaultValue={aPet.name} />
          </label>
          <label htmlFor="age">
            <input type="number" name="age" id="age" defaultValue={aPet.age} />
          </label>
          <button style={{ backgroundColor: 'blue' }}>Update our Turtle</button>
        </Form>
      </div>
      <Form action={`/delete/${id}/`} method="post">
        <button style={{ backgroundColor: 'red' }}>Release Turtle</button>
      </Form>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}
