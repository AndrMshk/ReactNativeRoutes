import { NavigationProp, useNavigation, NavigatorScreenParams, CompositeScreenProps} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import type { StackScreenProps } from '@react-navigation/stack'



export type RootStackParamList = {
  Home: undefined
  // Users: {
  //   id: number
  //   name: string
  //   isAdmin: boolean
  // } | undefined
  Users: undefined
  Users2: NavigatorScreenParams<NestedStack> | undefined
}

export type NestedStack = {
  Main2: undefined
  MainDetails: {
    id: number
  }
}

//полный пиздец с типами
export type MainDetailPropsType = CompositeScreenProps<
  BottomTabScreenProps<NestedStack, 'MainDetails'>, //уровень вложенный
  StackScreenProps<RootStackParamList>> //уровень выше

export type MainDetailPropsType2 = NativeStackScreenProps<NestedStack, 'MainDetails'>

// type helper!!!!!
type UseNavigationType = NavigationProp<RootStackParamList>
export const useAppNavigation = () => useNavigation<UseNavigationType>();
export type UsersPropsType = NativeStackScreenProps<RootStackParamList, 'Users'>


export type MainDetailsPropsType = CompositeScreenProps<
  BottomTabScreenProps<RootStackParamList, 'Users'>,
  StackScreenProps<NestedStack>>

// https://javascript.plainenglish.io/react-navigation-v6-with-typescript-nested-navigation-part-2-87844f643e37
