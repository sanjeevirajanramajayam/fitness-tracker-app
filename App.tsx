import DailyProgress from './src/DailyProgress';
import WeeklyProgress from './src/WeeklyProgress';
import RecentWorkouts from './src/RecentWorkouts';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {FlatList, ScrollView, StyleSheet, useColorScheme} from 'react-native';
import WorkoutPlan from './src/WorkoutPlan';
import CreateNewWorkout from './src/CreateNewWorkout';
import NavBar from './src/NavBar';

function App() {

  const colorScheme = useColorScheme();


  const lightStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16
    },
  });

  const darkStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '1b1b1b'
    },
  });

  const styles = colorScheme === 'dark' ? darkStyles : lightStyles;


  const data = [
    {key: 'DailyProgress', component: <DailyProgress />},
    {key: 'WeeklyProgress', component: <WeeklyProgress />},
    {key: 'RecentWorkouts', component: <RecentWorkouts />},
    {key: 'WorkoutPlan', component: <WorkoutPlan />},
  ];

  return (
    <SafeAreaProvider>
      <NavBar />

      <ScrollView>
        <SafeAreaView style={styles.container}>
          {/* <FlatList
          data={data}
          renderItem={({item}) => item.component}
          keyExtractor={item => item.key} />  */}
          <DailyProgress />
          <WeeklyProgress />
          <RecentWorkouts />
          <WorkoutPlan />
          <CreateNewWorkout />
        </SafeAreaView>
      </ScrollView>
    </SafeAreaProvider>
  );
}

export default App;
