import Image from 'next/image';

import logoImg from '@/assets/images/logo.svg';

const HomePage = () => {
  return (
    <div style={{ padding: "48px 200px", display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", flexDirection: "column" }}>
      <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
        <Image src={logoImg} alt="logo" />

        <div style={{ display: "flex", gap: "16px" }}>
          <button style={{ width: "240px", height: "48px", borderRadius: "4px", border: "none", background: "#e9e9e9", cursor: "pointer" }}>
            Voltar para Página Inicial
          </button>

          <button style={{ width: "240px", height: "48px", borderRadius: "4px", border: "none", background: "#5AC229", cursor: "pointer" }}>
            Criar Conta
          </button>
        </div>
      </div>

      <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ backgroundColor: "white", width: "720px", height: "560px", borderRadius: "16px" }}></div>
      </div>

      <div>Política de privacidade</div>
    </div>
  );
};

export default HomePage;
