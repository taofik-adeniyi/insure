import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    item: {
        // flex: 1,
        borderRadius: 10,
        backgroundColor: '#fff',
        width: '48%',
        elevation: 20,
        shadowColor: 'red',
        margin: 5,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: 150,
        overflow: 'hidden',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        resizeMode: 'cover'
    },
    text: {
        padding: 10,
    }
})