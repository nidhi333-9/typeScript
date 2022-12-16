type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};
const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <li key={name.first}>
            {name.first} {name.last}
          </li>
        );
      })}
    </div>
  );
};

export default PersonList;
