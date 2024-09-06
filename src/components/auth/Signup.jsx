import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
    Box,
    Button,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Text,
} from "@chakra-ui/react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { userApi } from "../../api/userApi";

const schema = Yup.object().shape({
    firstName: Yup.string().required("First Name is a required field!"),
    lastName: Yup.string().required("Last Name is a required field!"),
    email: Yup.string()
        .required("Email is a required field!")
        .email("Invalid email format!"),
    password: Yup.string()
        .required("Password is a required field!")
        .min(5, "Password must be at least 5 characters!"),
});

const Signup = ({ loading }) => {
    const [show, setShow] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const handleClick = () => setShow(!show);

    const handleSubmit = (values) => {
        userApi.registerUser(values)
            .then(response => {
                console.log("Registration successful:", response.data);
            })
            .catch(error => {
                setErrorMessage(error.response?.data?.message || "Registration failed. Please try again.");
            });
    };

    return (
        <Formik
            validationSchema={schema}
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
            }}
            onSubmit={handleSubmit}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
              }) => (
                <form noValidate onSubmit={handleSubmit}>
                    <Stack width="300px" spacing={4}>
                        {["firstName", "lastName", "email"].map((field) => (
                            <Box key={field}>
                                <Input
                                    type="text"
                                    border="1px"
                                    color="blackAlpha.700"
                                    borderColor={
                                        errors[field] && touched[field]
                                            ? "red"
                                            : "blackAlpha.500"
                                    }
                                    focusBorderColor="blackAlpha.500"
                                    placeholder={`Enter your ${field === 'firstName' ? 'first name' : field === 'lastName' ? 'last name' : 'email'}...`}
                                    _placeholder={{
                                        color: "blackAlpha.500",
                                    }}
                                    _hover={{
                                        border: "1px",
                                        borderColor: "blackAlpha.500",
                                    }}
                                    _focus={{ border: "1px" }}
                                    name={field}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values[field]}
                                />
                                <Text color="red.400" fontSize={14} marginTop={2}>
                                    {errors[field] && touched[field] && errors[field]}
                                </Text>
                            </Box>
                        ))}
                        <Box>
                            <InputGroup size="md">
                                <Input
                                    pr="4.5rem"
                                    type={show ? "text" : "password"}
                                    color="blackAlpha.700"
                                    border="1px"
                                    borderColor={
                                        errors.password && touched.password
                                            ? "red"
                                            : "blackAlpha.500"
                                    }
                                    focusBorderColor="blackAlpha.500"
                                    placeholder="Enter your password..."
                                    _placeholder={{
                                        color: "blackAlpha.500",
                                    }}
                                    _hover={{
                                        border: "1px",
                                        borderColor: "blackAlpha.500",
                                    }}
                                    _focus={{
                                        border: "1px",
                                    }}
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                <InputRightElement width="4.5rem">
                                    <Button
                                        h="1.75rem"
                                        variant="ghost"
                                        size="sm"
                                        onClick={handleClick}
                                        color="blackAlpha.600"
                                    >
                                        {show ? (
                                            <AiOutlineEye size={20} />
                                        ) : (
                                            <AiOutlineEyeInvisible size={20} />
                                        )}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <Text color="red.400" fontSize={14} marginTop={2}>
                                {errors.password && touched.password && errors.password}
                            </Text>
                        </Box>
                        {errorMessage && (
                            <Text color="red.400" fontSize={14} marginTop={2}>
                                {errorMessage}
                            </Text>
                        )}
                        <Button
                            type="submit"
                            bg="blue.600"
                            color="white"
                            _hover={{ bg: "blue.500" }}
                            isLoading={loading}
                        >
                            Sign Up
                        </Button>
                    </Stack>
                </form>
            )}
        </Formik>
    );
};

export default Signup;
