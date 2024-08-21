import { createRoot } from 'react-dom/client'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { persistor, store } from './store/store.js'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import TheContextApi from './context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={<h3>Loading...</h3>} persistor={persistor}>
    <ToastContainer />
      <TheContextApi>
        <App />
      </TheContextApi>
    </PersistGate>
  </Provider>,
)
