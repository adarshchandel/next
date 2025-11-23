'use client'
import AppNavBar from "@/components/common/navbar/navBar";
import Footer from "@/components/common/footer/footer";
import { ThemeProvider } from "@mui/material";
import MUITheme from '@/layouts/MUILayout'

export default function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <ThemeProvider theme={MUITheme}>
            <AppNavBar />
            {children}
            <Footer/>
        </ThemeProvider>
    );
}
