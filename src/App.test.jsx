import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from './App';
import { data } from './services/data';
import userEvent from '@testing-library/user-event';

//use if using api server
const server = setupServer(
  rest.get('api', (req, res, ctx) => {
    return res(ctx.json(data));
  })
);

beforeAll(() => server.listen());

afterAll(() => server.close());

test('app renders', () => {
  render(<App />);

  const heading = screen.getByRole('heading');

  expect(heading).toBeInTheDocument();
});
