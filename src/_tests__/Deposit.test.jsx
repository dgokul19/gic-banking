
import { render, screen, fireEvent } from '@testing-library/react';
import Dashboard from '../components/Dashboard';

describe('Deposit Component', () => {

  test('Check Deposit Component Initiate', () => {
    const component = render(<Dashboard />);

    const accountBalance = component.container.querySelector('#accountBalance');
    // Initial balance is 0
    expect(accountBalance).toHaveTextContent('Account Balance is: $0.00');

    // Navigating Menu checks
    const greetingElement = screen.getByText(/What would you like to do/i);

    expect(greetingElement).toBeInTheDocument();
  });

  test('Test Deposit Component is Loaded', () => {
    const component = render(<Dashboard />);

    const depositBtn = component.container.querySelector('#DEPOSIT');
    fireEvent.click(depositBtn);
    const depositText = screen.getByText(/Please enter the amount to Deposit/i);

  // Verify Deposit Component loaded
    expect(depositText).toBeInTheDocument();

  });



  test('should Deposit money and update the balance', () => {
    const component = render(<Dashboard />);
    
    // Navigating Deposit Btn
    const depositBtn = component.container.querySelector('#DEPOSIT');

    const accountBalanceText = component.container.querySelector('#accountBalance');


    fireEvent.click(depositBtn);
    const depositText = screen.getByText(/Please enter the amount to Deposit/i);
    expect(depositText).toBeInTheDocument();


    const depositInput = component.container.querySelector('#deposit_input');
    const updateBtn = component.container.querySelector('#depositFireEvent');

    // Initial balance is 0
    expect(accountBalanceText).toHaveTextContent('Account Balance is: $0.00');

    // Deposit 100 first
    fireEvent.change(depositInput, { target: { value: '100' } });
    fireEvent.click(updateBtn);

    // Verify balance is now 100
    expect(accountBalanceText).toHaveTextContent('Account Balance is: $100.00');
  });

  

});
