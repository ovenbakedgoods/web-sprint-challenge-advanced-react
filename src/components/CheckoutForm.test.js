import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { fireEvent, render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";


// form renders without error
test("renders without errors", () => {
    render(<CheckoutForm />);
});
//shows success message on firing submit button
test("shows success message on submit with form details", () => {
    //arrange 
    const screen = render(<CheckoutForm />);
    const submitButton = screen.getByRole('button', {name: /checkout/i});
    
    //act
    fireEvent.click(submitButton);

    //assert
    const success = screen.getByTestId("successMessage");
    expect(success).toBeInTheDocument();
    expect(success).toBeTruthy();
});
