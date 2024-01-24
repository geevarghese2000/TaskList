import { TaskComponentPropType } from "./types";
import style from "./styles/index.module.css";
import { Card, Form } from "react-bootstrap";

const Task = ({ task, changeStatus }: TaskComponentPropType) => {
  return (
    <Card className={`m-3 p-3 ${style["customCardTile"]}`}>
      <Form>
        <Form.Check
          label={task.title}
          checked={task.status === "complete" ? true : false}
          onChange={changeStatus}
          value={task.id}
        />
      </Form>
    </Card>
  );
};

export default Task;
