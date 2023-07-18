import { View, Text } from 'react-native'
import styles from './style'

export default function Title() {
    return (
        <View style={styles.BoxTitle}>
            <Text style={styles.text}>Controle de Tempero</Text>
        </View>
    )
}