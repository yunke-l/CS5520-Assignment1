import { StyleSheet } from "react-native";

const StyleHelper = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "center",
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

    gameMessage: {
        fontSize: 18,
        color: 'blue',
        alignSelf: 'center',
        marginVertical: '2%',
    },



});

export default StyleHelper;