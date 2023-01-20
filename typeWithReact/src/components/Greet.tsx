type GreetProps = {
  name: string;
  count?: number;
  isLoggedIn: boolean;
};

function Greet(props: GreetProps) {
  const { count = 0 } = props;
  return (
    <div>
      {props.isLoggedIn
        ? `  Hello ${props.name}, U have got ${count} points.`
        : "Hello Guest!"}
    </div>
  );
}

export default Greet;
