import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './02-advance-hooks/ThemeContext';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import { Page } from './Page';
import { UserInfo } from './UserInfo';
import Todo from './03-custom-hooks/Todo';
import { AppLayout } from './AppLayout';
import { ErrorPage } from './ErrorPage';
import { UserManagementLayout } from './UserManagementLayout';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './01-basic-hooks/Counter';
import SwitchButton from './02-advance-hooks/SwitchButton';
import Gallery from './Gallery';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const myroutes = createBrowserRouter([{
  element: <AppLayout />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: '/',
      element: <Page />
    },
    {
      path: '/counter',
      element: <Counter />
    },
    {
      path: '/styling',
      element: <SwitchButton />
    },
    {
      path: '/gallery',
      element: <Gallery />
    },
    {
      path: '/users',
      element: <UserManagementLayout />,
      children: [
        {
          index: true,
          element: <UserInfo />
        },
        {
          path: ':userId',
          element: <Todo />
        }
      ]
    }
]
}]);

root.render(
  <Provider store={store}>
    <RouterProvider router={myroutes} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
