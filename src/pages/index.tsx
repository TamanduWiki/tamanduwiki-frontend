import Link from "next/link";

import Flex from "@/components/Flex";
import Button from "@/components/Button";

const HomePage = () => {
  return (
    <Flex align="center" justify="center" gap="16px" style={{ height: "100vh" }}>
      <Link href="/signup"><Button variant="secondary">Cadastro</Button></Link>

      <Link href="/login"><Button>Login</Button></Link>
    </Flex>
  );
};

export default HomePage;
