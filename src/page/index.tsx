import './index.less';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home';


const PageFrame = () => {

    return (
        <BrowserRouter>
            <Suspense fallback={<>Loading...</>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}
export default PageFrame;