import { render, screen } from '@testing-library/react';
import { shallow } from "enzyme";
import App from './App';

describe("App Component", () => {
  test('App peut être render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeTruthy()
    // render(<App />);
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
  });

})
