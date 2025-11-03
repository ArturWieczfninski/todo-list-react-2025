import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttoms";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useTask } from "./Tasks/useTask";


function App() {
  const {
    tasks,
    hideDone,
    removeTask,
    toggleTaskDone,
    toggleHideDone,
    setAllDone,
    addNewTask,
  } = useTask();

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        exstraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
}

export default App;
