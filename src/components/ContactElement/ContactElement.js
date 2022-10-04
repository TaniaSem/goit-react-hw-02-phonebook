export const ContactElement = ({ id, name, number, onDeleteContact }) => {
  return (
    <li key={id}>
      <p>
        {name}: {number} : {id}
      </p>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
  );
};
