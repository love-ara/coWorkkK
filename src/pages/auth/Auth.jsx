import React, { useEffect, useState } from "react";
import { Flex, Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Signup from "../../components/auth/Signup";
import Login from "../../components/auth/Login";
import SharedAuthLayout from "../../components/auth/SharedAuthLayout";
import bg from "../../assets/istock.png";
import iStockSignUp from "../../assets/signup.png";
import iStockLogin from "../../assets/login.png";
import { resetAuthState } from "../../redux/authSlice";

const Auth = () => {
    const [signup, setSignup] = useState(false);
    const { success, loading, error } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (success) {
            toast.success(
                signup ? "Register successfully 😎" : "Login successfully 😎"
            );
            dispatch(resetAuthState());
            if (signup) {
                setSignup(false);
            } else {
                navigate("/dashboard");
            }
        }
        if (error) {
            toast.error(error);
            dispatch(resetAuthState());
        }
    }, [error, success, signup, dispatch, navigate]);

    return (
        <Flex
            height="100vh"
            width="100%"
            justify="center"
            align="center"
            position="relative"
            overflow="hidden"
            bg="#83b5aa"
        >
            <Box
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                bgImage={`url(${bg})`}
                bgSize="cover"
                bgPosition="center"
                bgRepeat="no-repeat"
                zIndex={0}
                _before={{
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    bg: "rgba(240,246,240,0.03)",
                    zIndex: 1,
                }}
            />
            <SharedAuthLayout
                isSignup={signup}
                formComponent={signup ? <Signup loading={loading} /> : <Login />}
                onToggle={() => setSignup(!signup)}
                loading={loading}

                title={signup ? "Create Account" : "Login"}
                toggleText={
                    signup ? "Already have an account?" : "Don't have an account?"
                }
                imageSrc={signup ? iStockSignUp : iStockLogin}
            />
        </Flex>
    );
};

export default Auth;
