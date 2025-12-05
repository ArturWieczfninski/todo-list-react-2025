import Form from "./Form";
import Tasks from "./TaskList";
import Buttons from "./Buttoms";
import Section from "../common/Section";
import Header from "../common/Header";
import Container from "../common/Container";
import TaskList from "./TaskList";

function Tasks() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section
        title="Lista zadań"
        body={<TaskList />}
        exstraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default Tasks;
