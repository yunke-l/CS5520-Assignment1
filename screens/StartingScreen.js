import React, {useState} from "react";
import { View } from "react-native";
import InputComp from "../components/InputComp";

const StartingScreen = () => {
    const [email, setEmail] = useState("");

    const isEmailvalid = (email) => {
        return email.includes("@");
    };

    return (
        <View>
            <InputComp
                label="Email"
                value={email}
                onChangeText={setEmail}
                validateFunction={isEmailvalid}
                errorMessage="Please enter a valid email"
            />
        </View>
    );
}

export default StartingScreen;