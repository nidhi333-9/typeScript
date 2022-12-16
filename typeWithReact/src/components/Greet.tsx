type GreetProps = {
  name: string;
  count: number;
  isLoggedIn: boolean;
};

function Greet(props: GreetProps) {
  return (
    <div>
      {props.isLoggedIn
        ? `Hello ${props.name}! You have ${props.count} unread messages.`
        : "Welcome Guest!"}
    </div>
  );
}

export default Greet;
