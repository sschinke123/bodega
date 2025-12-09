import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { useState } from 'react';
import { getTheme } from './theme';
import AppLayout from './layouts/AppLayout';
import HomePage from './pages/home/HomePage';
import HistoryPage from './pages/history/HistoryPage';
import PricingPage from './pages/pricing/PricingPage';
import ContactPage from './pages/contact/ContactPage';

function App() {
    const [mode, setMode] = useState('light');

    return (
        <ThemeProvider theme={getTheme(mode)}>
            <CssBaseline />
            <HashRouter basename="/bodega">
                <Routes>
                    <Route
                        path="/"
                        element={<AppLayout mode={mode} setMode={setMode} />}
                    >
                        <Route index element={<HomePage />} />
                        <Route path="history" element={<HistoryPage />} />
                        <Route path="pricing" element={<PricingPage />} />
                        <Route path="contact" element={<ContactPage />} />
                    </Route>
                </Routes>
            </HashRouter>
        </ThemeProvider>
    );
}

export default App;
