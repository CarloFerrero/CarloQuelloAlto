import App from "./pages/app"
import React from "react"
import { render } from "./test-utils"
import { screen } from "@testing-library/react"

test("renders learn react link", () => {
  render(<App />)
  const linkElement = screen.getByText(/learn chakra/i)
  expect(linkElement).toBeInTheDocument()
})
