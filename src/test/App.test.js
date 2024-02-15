/**
 * @jest-environment jsdom
 */
import React from 'react'
import { fireEvent, render, screen } from "@testing-library/react"
import { toBeInTheDocument } from "@testing-library/jest-dom"
import App from '../App';

test("should render App component", () => {
    render(<App />)
    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(submitButton).toBeInTheDocument()

});