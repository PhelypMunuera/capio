import { Header } from "../Componets/Header";
import { Footer } from "../Componets/Footer";

import { Outlet } from "react-router-dom";






export function Layout()  {
  return (
    <div className='layoutGrid'>
      <Header name="Phelyp Munuera" />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}



