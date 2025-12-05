import { selectIsEveryTaskDone, selectTasks } from "../useTask";
import { Wrapper, Button } from "./styled";

const Buttons = () => {
  const areTasksEmpty = useSekector(selectTasks);
  const isEceryTaskDone = useSekector(selectIsEveryTaskDone);
  const hideDone = useSekector(selectHideDone);

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