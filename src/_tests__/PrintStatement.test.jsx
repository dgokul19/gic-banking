
import { render, screen, fireEvent } from '@testing-library/react';
import Dashboard from '../components/Dashboard';

describe('Print Statement Component', () => {

  test('should Print Statement rendering', () => {
    const component = render(<Dashboard />);

    // Navigating Deposit Btn
    const navBtn = component.container.querySelector('#PRINT');

    fireEvent.click(navBtn);
    const titleText = screen.getByText(/Account Statement/i);
    expect(titleText).toBeInTheDocument();

  });
  test('Should display no records found text', () => {
    const component = render(<Dashboard />);
    // Navigating Deposit Btn
    const navBtn = component.container.querySelector('#PRINT');
    fireEvent.click(navBtn);

    const tableData = component.container.querySelector('#tableData');

    expect(tableData).toHaveTextContent('No Records to Display');

  });
});
