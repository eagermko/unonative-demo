import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Icon } from 'unonative';

export default function App() {
  return (
    <SafeAreaView className='flex-1 flex'>
      <View className='flex flex-1 justify-center bg-white items-center'>
        <Text className='text-30px font-bold leading-40.5px text-#3F414E'>
          Welcome
        </Text>

        <View className='flex flex-row'>
          <Icon
            icon='gg-smile-mouth-open'
            className='w-64px h-64px text-red mt-4'
          />
          <Icon
            icon='bi-emoji-smile-fill'
            className='w-64px h-64px text-red mt-4 ml-4'
          />
          <Icon
            icon='pajamas-slight-smile'
            className='w-64px h-64px text-red mt-4 ml-4'
          />
        </View>

        <Text className='mt-15px text-#A1A4B2 text-base leading-26.4px mx-58px text-center'>
          Welcome to the world of React Native + UnoCSS!
        </Text>
      </View>
    </SafeAreaView>
  );
}
