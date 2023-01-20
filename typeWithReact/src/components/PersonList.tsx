type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

function PersonList(props: PersonListProps) {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <li>
            {name.first} {name.last}
          </li>
        );
      })}
    </div>
  );
}

export default PersonList;
