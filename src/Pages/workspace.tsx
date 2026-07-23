import { Header } from "../Componets/Header";
import { Footer } from "../Componets/Footer";
import { Register } from "../Componets/Register";


export function Workspace() {
  return (
    <div className='layoutGrid'>
      <Header name="Phelyp Munuera" />
      <main>
        <Register />
      </main>
      <Footer />
    </div>
  );
}
