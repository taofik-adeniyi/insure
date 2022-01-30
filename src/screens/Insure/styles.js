import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  page: {
    marginTop: 45,
    paddingHorizontal: 10,
    alignItems: 'stretch',
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    marginTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerText: {
    fontWeight: '700',
    fontSize: 34,
    paddingVertical: 10,
  },
  container: {
      flex: 1,
      marginVertical: 20,
  }
});
