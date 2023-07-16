import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containnerSelect: {
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#999',
        borderRadius: 25,
        margin: 20,
    },
    text: {
        fontSize: 20,
        fontWeight: 400,
        color: '#240202',
        padding: 10,
    },
    carne: {
        flexDirection: 'row',
        padding: 5,
    },
    tipoCarne: {
        margin: 10,
    },
    tipoCarne2: {
        margin: 10,
    },
    input: {
        backgroundColor: '#fff',
        width: 60,
        padding: 5,
        borderRadius: 10,
    },
    selectedOption: {
        backgroundColor: 'yellow',
        borderWidth: 1,
        borderColor: '#44f',
        borderRadius: 15,
        padding:5,
      },
    temperoContainer: {
        backgroundColor: '#fff',
        padding: 15,
        margin: 15,
        borderRadius: 20,
      },
      shareButton: {
        backgroundColor: '#fa0303',
        borderWidth: 2,
        borderColor: '#000000',
        borderRadius:10,
        padding: 5,
        margin: 10,
    },
    shareButtonText: {
        color: '#fff',

      }  
  });

export default styles;