import React from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from './Buttons';
import Section from './Section';
import Header from './Header';
import Container from "./Container";


const tasks = [
  { id: 1, content: "walk the dog", done: false },
  { id: 2, content: "eat breakfast", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <Container>

      <Header title="To Do List" />
      <Section
        title="Add a new task to the list"
        body={<Form />}
      />
      <Section
        title="To Do:"
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraHeaderContent={
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
      />

    </Container>
  );
}
 
export default App;
