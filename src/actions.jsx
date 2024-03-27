import { redirect } from 'react-router-dom';

const URL = import.meta.env.VITE_BASE_URL;

// Create action
export const createAction = async ({ request }) => {
  console.log('here');
  const formData = await request.formData();
  const newPet = {
    name: formData.get('name'),
    age: formData.get('age'),
  };
  await fetch(`${URL}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPet),
  });
  return redirect('/');
};

// Update action

export const updateAction = async ({ request, params }) => {
  const formData = await request.formData();
  const updatedPet = {
    name: formData.get('name'),
    age: formData.get('age'),
  };
  console.log(updatedPet);

  await fetch(`${URL}${params.id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedPet),
  });

  return redirect('/'); //go back to the landing page
};

// Delete action
export const deleteAction = async ({ params }) => {
  await fetch(`${URL}${params.id}`, {
    method: 'delete',
  });

  return redirect('/');
};
