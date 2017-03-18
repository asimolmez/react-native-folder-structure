/**
 * It is stateless component of Screen. We can use it for seperate presentation from business logic.
 */

import React from "react";
import { View, Button } from "../../components";

const SignIn = () => {

    const { signIn, forgetPassword } = props;

    return (
        <View>
            <Button text={"Login"} onPress={signIn} />
            <Button text={"Forget Password"} onPress={forgetPassword} />
        </View>
    );
}

export default SignIn