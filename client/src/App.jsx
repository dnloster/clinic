import { Fragment } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import { publicRoutes } from './routes';
import MainLayout from './layout';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    let Layout = MainLayout;

                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }

                    return <Route key={index} path={route.path} element={<Layout>{<Page />}</Layout>} />;
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
