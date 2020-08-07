import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    //render app without breaking
    render(<CheckoutForm />)
    expect(screen.getByText(/checkout form/i)).toBeInTheDocument()
    
});

test("form shows success message on submit with form details", async() => {
    //render app without breaking
    render(<CheckoutForm />)
    //find the inputs
const firstName = screen.getByPlaceholderText(/alan/i)
const lastName = screen.getByPlaceholderText(/plants/i)
const address = screen.getByPlaceholderText(/555 sunshine blvd/i)
const city = screen.getByPlaceholderText(/happyville/i)
const state = screen.getByPlaceholderText(/state/i)
const zip = screen.getByPlaceholderText(/zip/i)
    //fill the inputs
    fireEvent.change(firstName, { target: { value: "Ava" } });
    fireEvent.change(lastName, { target: { value: "wingfield" } });
    fireEvent.change(address, { target: { value: "555 Sunshine Place" } });
    fireEvent.change(city, { target: { value: "NotHere" } });
    fireEvent.change(state, { target: { value: "OfBliss" } });
    fireEvent.change(zip, { target: { value: "23325" } });
    //find the button
const submitBtn = screen.getByRole('button')

    //click the button
    fireEvent.click(submitBtn)

    //assert that the success message has posted
    expect(await screen.findByText(/Ava/i)).toBeInTheDocument()
});
