import { WebView } from 'react-native-webview';
import Circles from "./Circlebackground";

const LiveChatCamp = (props, { navigation }) => {
    return (
        <WebView
                source={{
                    uri: 'https://tawk.to/womenssafetyapp'
                }}
                style={{ marginTop: 20 }}
            />
    );
}

export default LiveChatCamp;