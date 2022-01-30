import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
  },
  mapContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    backgroundColor: "lightblue", 
    width: "100%",
    height: "100%",
  },
  modal:{
    justifyContent: 'flex-start',
    margin: 0
  },
  BottomSearch: {

    backgroundColor: 'whitesmoke',
    paddingTop: 20,
    paddingBottom: 4,
    paddingLeft: 20,
    paddingRight: 20,

    shadowOpacity: .08,
    shadowRadius: 3,

    // borderRadius: 6,
    // elevation: 3


  },
  input: {
    fontSize: 16,
    height: 39,
    marginBottom: 8,
    marginTop: 8,
    borderRadius: 6,
    // width: "100%",
    paddingHorizontal: 10,
    // backgroundColor: "#FFFFFF",
    backgroundColor: 'white',
  },  
  DrawerButton: {
    backgroundColor: "white",
    position: "absolute",
    left: 25,
    top: 50,
    borderRadius: 30,
    width: 48,
    height: 48,
    flex:1,
    justifyContent: 'center',
    alignItems: "center",
    shadowOpacity: .08,
    shadowRadius: 3,
    zIndex: 1,
    elevation: 3


  },

  SearchBarButton: {
    backgroundColor: "white",
    borderRadius: 40,
    position: 'absolute',
    zIndex: 1,
    // top: 0,
    bottom: 10,
    width: 68,
    height: 48,
    alignSelf: 'center',
    flex:1,
    justifyContent: 'center',
    alignItems: "center",
    shadowOpacity: .08,
    shadowRadius: 3,
    elevation: 3


  },

  SearchButton: {
    position: 'absolute',
    zIndex: 1,
    top: 80,
    right: 10,
    width: 68,
    height: 48,
    alignSelf: 'center',
    flex:1,
    justifyContent: 'center',
    alignItems: "center",

  },

  item:{
    padding: 10,
    // backgroundColor: 'grey',
    // width: '60%'
  },
  textItem:{
    fontSize: 16,
  }
})

