import useAuth from "../../utils/hooks/useAuth";
const Home = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div>
      <h1>Bem-vindo, {`${user?.username && user.username}!`}</h1>
    </div>
  );
};

export default Home;
