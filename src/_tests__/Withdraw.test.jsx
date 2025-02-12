
import { render, screen, fireEvent } from '@testing-library/react';
import Dashboard from '../components/Dashboard';

describe('Withdraw Component', () => {

  test('Check Withdraw Component Initiate', () => {
    const component = render(<Dashboard />);

    const accountBalance = component.container.querySelector('#accountBalance');
    // Initial balance is 0
    expect(accountBalance).toHaveTextContent('Account Balance is: $0.00');

    // Navigating Menu checks
    const greetingElement = screen.getByText(/What would you like to do/i);

    expect(greetingElement).toBeInTheDocument();
  });

  test('Test Withdraw Component is Loaded', () => {
    const component = render(<Dashboard />);

    const navBtn = component.container.querySelector('#WITHDRAW');
    fireEvent.click(navBtn);
    const navText = screen.getByText(/Please enter the amount to Withdraw/i);

  // Verify Withdraw Component loaded
    expect(navText).toBeInTheDocument();

  });



  test('should Deposit & Withdraw money and update the balance', () => {
    const component = render(<Dashboard />);
    
    // Navigating Deposit Btn
    const accountBalanceText = component.container.querySelector('#accountBalance');
    const depositBtn = component.container.querySelector('#DEPOSIT');
    fireEvent.click(depositBtn);
    const depositText = screen.getByText(/Please enter the amount to Deposit/i);
    expect(depositText).toBeInTheDocument();


    const depositInput = component.container.querySelector('#deposit_input');
    const updateBtn = component.container.querySelector('#depositFireEvent');

    // Deposit 100 first
    fireEvent.change(depositInput, { target: { value: '100' } });
    fireEvent.click(updateBtn);

    // Verify balance is now 100
    expect(accountBalanceText).toHaveTextContent('Account Balance is: $100.00');

    // Withdraw 50

    const withdrawNavBtn = component.container.querySelector('#WITHDRAW');

    fireEvent.click(withdrawNavBtn);
    const navText = screen.getByText(/Please enter the amount to Withdraw/i);
    expect(navText).toBeInTheDocument();

    
    const withDrawField = component.container.querySelector('#withDrawField');
    const triggerWithdraw = component.container.querySelector('#withdrawTrigger');

    fireEvent.change(withDrawField, { target: { value: '50' } });
    fireEvent.click(triggerWithdraw);

    // Verify balance is now 50
    expect(accountBalanceText).toHaveTextContent('Account Balance is: $50.00');
  });
});
