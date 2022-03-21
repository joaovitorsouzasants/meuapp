import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121815',
    },
    text: {
        fontSize: 25,
        margin: 20,
        marginTop: 50
    },
    input: {
        backgroundColor: '#1F1E25',
        color: 'white',
        fontSize: 18,
        padding:  15,
        marginHorizontal: 20
    },
    button: {
        backgroundColor: 'green',
        padding: 15,
        margin: 20,
        alignItems: 'center',
        borderRadius: 9
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonTask:{
        backgroundColor: '#1F1E25',
        padding: 15,
        borderRadius: 22,
        marginHorizontal: 20,
        marginBottom: 10,
    },
    textTask:{
        color: 'white',
        fontSize: 20
    }
})