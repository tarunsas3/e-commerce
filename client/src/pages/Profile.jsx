import styled from "styled-components";
import { useState } from "react";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../redux/apiCalls";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
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
  flex-wrap: wrap;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  margin-top: 10px;
  padding: 15px 20px;
  margin-left: auto;
  margin-right: auto;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Link = styled.a`
  margin: 5px 0px;
  padding: 2px;
  font-size: 12px;
  text-decoration: underline;
  text-decoration-color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Error = styled.span`
  color: green;
  font-size: 15px;
  text-align: center;
  margin-top: 10px;
`;

const Profile = () => {
  let myUser = useSelector((state) => state.user);
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const userUpdateSuccess = () => {
    setMessage("User Updated Successfully, Relogin to continue");
    setTimeout(() => {
      window.location.assign("http://localhost:3000");
    }, 2000);
    setTimeout(() => {
      window.localStorage.clear();
    }, 2000);
  };

  const handleClick = (e) => {
    e.preventDefault();
    update(
      dispatch,
      {
        username,
        email,
      },
      myUser.currentUser._id
    );
    userUpdateSuccess();
  };

  return (
    <Container>
      <Wrapper>
        <Title>UPDATE ACCOUNT</Title>
        <Form>
          <Input
            placeholder={myUser.currentUser.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder={myUser.currentUser.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button onClick={handleClick}>UPDATE</Button>
          <Error>{message}</Error>
        </Form>
        <Link>GO BACK</Link>
      </Wrapper>
    </Container>
  );
};

export default Profile;
