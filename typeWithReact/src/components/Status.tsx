type StatusProps = {
  status: "loading" | "success" | "error";
};

function Status(props: StatusProps) {
  let message;
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Data fetched successfully...";
  } else if (props.status === "error") {
    message = "Oops...U got an error...";
  }
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default Status;
