import { Header } from "../Componets/Header";
import { Footer } from "../Componets/Footer";
import { DataOfRegisters } from "../Componets/DataOfRegisters";




export function Workspace() {
  return (
    <div className='layoutGrid'>
      <Header name="Phelyp Munuera" />
      <main>
        <DataOfRegisters />
      </main>
      <Footer />
    </div>
  );
}
