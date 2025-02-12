
import { render, screen } from '@testing-library/react';
import Dashboard from '../components/Dashboard';

describe('Dashboard Component', () => {

  test('Check Default Account Balance', () => {
    const component = render(<Dashboard />);

    const accountBalance = component.container.querySelector('#accountBalance');
    // Initial balance is 0
    expect(accountBalance).toHaveTextContent('Account Balance is: $0.00');


  });
  test('Check Default Greeting Component Rendering', () => {
    const component = render(<Dashboard />);
    const greetingElement = screen.getByText(/Welcome to AwesomeGIC Bank!/i);

    expect(greetingElement).toBeInTheDocument();

  });

  test('Test Navigation Labels in Home Content', () => {
    const component = render(<Dashboard />);

    const NavElements = component.container.querySelector('#nav-element');

    expect(NavElements).toHaveTextContent('Cash Deposit');
    expect(NavElements).toHaveTextContent('Cash Withdraw');
    expect(NavElements).toHaveTextContent('Print Statement');
    expect(NavElements).toHaveTextContent('Quit');
  });
});
