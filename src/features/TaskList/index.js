
import {List, Item, Content, Button} from "./styled";
import {useDispatch, useSelector} from "react-redux";
import {selectHideDone, selectTasks, toggleTaskDone, removeTask} from "../useTask";
import {List, Item, Content, Button} from "./styled";

const TaskList = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);

  const dispach = useDispatch();
  return (
  <List>
{tasks.map((task) => (
  <Item
      key={task.id}
      hidden={task.done && hideDone}
    >
      <Button
      toggleDone
      onClick={() => dispach(toggleTaskDone(task.id))}
      >
      {task.done ? "✓" : ""}
      </Button>
      <Content done={task.done}> 
        {task.content}
        </Content>
      <Button
      remove 
      onClick={() => dispach(removeTask(task.id))}
      >
      🗑
      </Button>
    </Item>
))}
</List>
);
};
          

export default TaskList;
