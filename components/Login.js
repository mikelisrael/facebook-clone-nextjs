import { signIn } from "next-auth/react";
import Image from "next/image";

const Login = () => {
  //   const { data: session, status } = useSession();

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-10">
      <Image
        src="https://links.papareact.com/5me"
        height={250}
        width={250}
        objectFit="contain"
      />
      <h1
        onClick={signIn}
        className="bg-blue-600 rounded-full text-white text-center p-5 cursor-pointer hover:bg-blue-500 duration-200"
      >
        Login with facebook
      </h1>
    </div>
  );
};

export default Login;
