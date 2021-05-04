import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Home from './Home'
import { COLORS, FONTS } from '../constants'
import ProfileScreen from './Profile'

const HomeRoute = () => <Home></Home>

const ProfileRoute = () => <ProfileScreen></ProfileScreen>



const MyBtmNvgtion = () => {

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'Home', icon: 'home', color: COLORS.gray },
        { key: 'profile', title: 'Profile', icon: 'account-box', color: COLORS.lightGray },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: HomeRoute,
        profile: ProfileRoute,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />

    );
};

export default MyBtmNvgtion;