import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { useState } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 10px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 15px 0px;
  font-size: 12px;
  text-decoration: underline;
  text-decoration-color: white;
  text-align: center;
  cursor: pointer;
`;

const Success = styled.span`
  color: green;
  text-align: center;
  margin-top: 5px;
`;

const Logout = () => {
  const [message, setMessage] = useState("");
  const { isFetching } = useSelector((state) => state.user);

  const userLogoutSuccess = () => {
    setMessage("User Logout Successful");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  const handleClick = (e) => {
    e.preventDefault();
    localStorage.clear();
    userLogoutSuccess();
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN OUT</Title>
        <Form>
          <Link>ARE YOU SURE YOU WANT TO LOGOUT?</Link>
          <Button onClick={handleClick} disabled={isFetching}>
            LOGOUT
          </Button>
          <Success>{message}</Success>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Logout;
