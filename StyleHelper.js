import { StyleSheet } from "react-native";

const StyleHelper = StyleSheet.create({

    // Global styles
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "center",
        // marginBottom: '30%',
    },
    header: {
        color: 'darkblue',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: '5%',
    },
    buttonBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginVertical: '5%',
    },

    regularText: {
        fontSize: 18,
        color: 'blue',
        alignSelf: 'flex-start',
        marginVertical: '2%',
    },
    userDataText: {
        fontSize: 18,
        color: 'darkred',
        alignSelf: 'flex-start',
    },


    // game screen styles
    gameMessage: {
        fontSize: 18,
        color: 'blue',
        alignSelf: 'center',
        marginVertical: '2%',
    },
    logoutButton: {
        alignSelf: 'flex-end',
        marginRight: '5%',
    },
    image: {
        width: 100, 
        height: 100, 
        marginVertical: 20,
    },


    // input component styles
    inputContainer: {
        width: '100%',
        marginBottom: '15%',
    },
    input: {
        width: '100%',
        borderBottomColor: 'blue',
        borderBottomWidth: 2,
        alignSelf: 'flex-start', 
        fontSize: 18,
        color: 'blue',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 8,
    },
    
    inputError: {
        color: 'black',
        fontSize: 15,
    },
    inputText: {
        color: 'blue',
        fontSize: 18,
        alignSelf: 'flex-start',
        marginBottom: '10%',
    },


    // checkbox component styles
    checkboxContainer:{
        flexDirection: "row",
        alignItems: "center",
      },
      checkbox:{
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 3,
        marginRight: 10,
        justifyContent: "center",
        alignItems: "center",
      },
        
      checkboxLabel: {
        color: "blue",
        fontSize: 15,
      },
      checkboxSelected: {
        color: "white",
        fontWeight: "bold",
      },

      // card component styles
      card: {
        backgroundColor: '#B8B8B8',
        width: '80%',
        borderRadius: 10,
        padding: 12,
        alignItems: 'center',
        marginBottom: '30%',
        // IOS shadow
        shadowColor: 'gray',
        shadowOffset: { width: 5, height: 5 },
        shadowRadius: 6,
        shadowOpacity: 2,
        // Android shadow
        elevation: 5,
    },

    // linear gradient component styles
    linearGradient: {
        flex: 1,
        width: '100%',
    },


});

export default StyleHelper;