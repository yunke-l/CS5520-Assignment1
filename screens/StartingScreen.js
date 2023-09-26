import React, {useState} from "react";
import { Text } from "react-native";
import CardComp from "../components/CardComp";
import InputComp from "../components/InputComp";

const StartingScreen = () => {
    const [email, setEmail] = useState("");

    const isEmailvalid = (email) => {
        return email.includes("@");
    };

    return (
        <CardComp>
            <Text>Welcome</Text>
            <InputComp
                label="Email"
                value={email}
                onChangeText={setEmail}
                validateFunction={isEmailvalid}
                errorMessage="Please enter a valid email"
            />
        </CardComp>
    );
}

export default StartingScreen;