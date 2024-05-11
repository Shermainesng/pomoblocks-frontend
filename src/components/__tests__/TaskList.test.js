import { render, screen, cleanup } from "@testing-library/react";
import TaskList from "../Tasks/TaskList";

const mockTasks = [
  { id: 1, title: "Task 1", description: "This is the first task" },
  { id: 2, title: "Task 2", description: "This is the second task" },
];

test("renders page title", () => {
  render(<TaskList />);
  const title = screen.getByText("Tasks to Complete");
  expect(title).toBeInTheDocument();
});

test("renders existing tasks", () => {
  render(<TaskList tasks={mockTasks} />);
  const tasks = screen.getAllByText(/Task/i); // Matches "Task 1" and "Task 2"
  expect(tasks.length).toBe(2);
});

test("renders add task button", () => {
  render(<TaskList />);
  const button = screen.getByTestId("add-task-btn");
  expect(button).toBeInTheDocument();
});
// test("should render TaskList component", () => {
//   render(<TaskList />);
//   const TaskListElement = screen.getByTestId("tasklist-1");
//   expect(TaskListElement).toBeInTheDocument();
// });
