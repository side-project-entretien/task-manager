
import { Route, Routes } from 'react-router';
import FormPage from './pages/formPage';
import HomePage from './pages/homePage';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="manage/:id?" element={<FormPage />} />
        </Routes>
    )
}

export default Router;