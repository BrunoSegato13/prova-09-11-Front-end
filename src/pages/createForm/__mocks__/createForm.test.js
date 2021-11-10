import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios"
import CreateForm from "../createForm";

const mockPerson = {
  name: "Teste",
  email: "teste@teste.com",
  birth: "2021-02-28"
}

const MockCreateForm = () => {
  return (
    <BrowserRouter>
      <CreateForm />
    </BrowserRouter>
  );
};


test("should send a contac to create and expect api is called", async () =>{
    
  axios.post.mockImplementation(()=> Promise.resolve(mockPerson));
  render(<MockCreateForm/>);

  const nameElement = screen.getByPlaceholderText("Enter your name");
  const emailElement = screen.getByPlaceholderText("Enter your email");
  const phoneElement = screen.getByTestId("phone");
  const button = screen.getByRole("button");


  fireEvent.change(nameElement, { target: { value: "Teste"}});
  fireEvent.change(emailElement, { target: { value: "teste@teste.com"}});
  fireEvent.change(phoneElement, { target: { value: "4500000000"}});
  fireEvent.click(button); 

  expect(nameElement).toBeInTheDocument();
  expect(emailElement).toBeInTheDocument();
  expect(phoneElement).toBeInTheDocument();

  expect(axios.post).toHaveBeenCalled();
});
