import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessages } = useContext(AuthContext);

  return (
      <View style={styles.container}>
        <NavigationEvents 
          onWillBlur={clearErrorMessages}
        />
        <AuthForm 
          headerText="Sign Up for Tracker"
          errorMessage={state.errorMessage}
          submitBtnText="Sign Up"
          onSubmit={({ email, password }) => signup({ email, password })}
        />
        <NavLink
          routeName="Signin"
          text="Already have an account? Sign in"
        />
      </View>
  );
};

SignupScreen.navigationsOptions = {
  headerShown: 'false'
};

/*SignupScreen.navigationsOptions = () => {
  return {
    header: null
  };
};*/


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200
  }
});

export default SignupScreen;