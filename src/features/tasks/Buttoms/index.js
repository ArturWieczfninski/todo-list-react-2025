import { selectIsEveryTaskDone, selectTasks } from "../useTask";
import { Wrapper, Button } from "./styled";

const Buttons = () => {
  const areTasksEmpty = useSelector(selectTasks);
  const isEceryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);

  const dispach = useDispatch();

  
  <Wrapper>
    {!areTasksEmpty && (
    <>
      <Button onClick={() => dispach(toggleHideDone())}>
        {hideDone ? "Pokaż" : "Ukryj "} ukończone
      </Button> 
      <Button 
      onClick={() => dispach(setAllDone())} 
      disabled={isEceryTaskDone}
        >
        Ukończ wszystkie
      </Button>
    </>
    )}
  </Wrapper>
}


export default Buttons ;