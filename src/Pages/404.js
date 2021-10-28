import { Result, Button } from "antd";
import { useHistory } from "react-router";

const NotFound404 = () => {
  let history = useHistory();
  return (
    <>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button
            type="primary"
            onClick={() => {
              history.push("/dashboard");
            }}
          >
            Back Home
          </Button>
        }
      />
    </>
  );
};

export default NotFound404;
