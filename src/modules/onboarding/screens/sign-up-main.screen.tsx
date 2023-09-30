import {View, Text} from 'react-native';
import Header from '../../../components/header/header';
import { navigationRef } from '../../../utils';

const SignUpMain = () => {
    return(
        <View style={{flex:1, backgroundColor:'pink'}}>
            <Header navigation={navigationRef}/>
        </View>
    )
};

export default SignUpMain;