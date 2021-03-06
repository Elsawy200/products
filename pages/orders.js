import *as React from 'react'
import {
    StyleSheet,
    Text,
    Image,
    ImageBackground,
    TextInput,
    View,
    TouchableOpacity,
    TouchableHighlight,
    Alert,
    ScrollView,
    Button,
    EventSubscriptionVendor,
    Modal,
    Dimensions,
    FlatList,
    PermissionsAndroid,
    AsyncStorage,
    StatusBar,
    SafeAreaView,
}
    from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Search from 'react-native-search-box';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;


export default class Orders extends React.Component {

    constructor(props) {


        super(props)
        this.state = {

            Items: [{}],



            counter:0,
        }


    }




    render() {


        return (
            <>

                <StatusBar backgroundColor={'grey'}/>

                <ScrollView>
                    <View style={{
                        flex: 1
                    }}>

                        <Text style={style.label}>Order Details</Text>

                        <Text style={{
                            marginLeft: width * 0.03,
                            fontSize: 17,
                            color: 'grey',
                            fontWeight: 'bold'

                        }}
                        >Order item</Text>

                        <ScrollView>
                            <View>
                                <FlatList
                                    data={this.state.Items}
                                    contentContainerStyle={{}}
                                    renderItem={({item, index}) => (
                                        <>


                                            <View style={style.container}>

                                                <Image style={style.img} source={require('../images/sto3.png')}/>


                                                <View style={{
                                                    flexDirection: 'column',
                                                    backgroundColor: '#f',
                                                    width: width * 0.4,

                                                }}>

                                                    <Text style={style.brand_text}>dsv</Text>

                                                    <Text style={style.txtcon}>by<Text
                                                        style={style.txtcon2}>bestquality</Text></Text>

                                                    <Text style={style.prc}>{item.prc} LE</Text>

                                                </View>

                                                <View style={style.count_view}>

                                                    <TouchableOpacity disabled={this.state.counter == 0 ? true : null}

                                                                      onPress={() => {
                                                                          this.min()
                                                                      }}>

                                                        <Text style={style.minus}>-</Text>

                                                    </TouchableOpacity>

                                                    <Text style={{
                                                        fontSize: 20,
                                                        marginTop: height * 0.003,
                                                        color: "#000"
                                                    }}>
                                                        {item.counter}
                                                    </Text>

                                                    <TouchableOpacity onPress={() => {
                                                        this.plus()
                                                    }}>

                                                        <Text style={style.plus}>+</Text>

                                                    </TouchableOpacity>


                                                </View>
                                            </View>


                                        </>
                                    )}
                                />

                            </View>
                        </ScrollView>




                    </View>

                </ScrollView>




            </>
        )
    }
}


const style = StyleSheet.create({
    label: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        padding: height * 0.02
    },
    img: {
        width: 65,
        height: 65,
        borderRadius: 40,
        margin: height * 0.02,

    },
    brand_text: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000',
        marginTop: height * 0.03,

    },
    container: {
        flexDirection: 'row',

        height: height * 0.14,
        //backgroundColor:'#f00',
        //borderBottomWidth:1,
        borderColor: 'grey'
    },
    txtcon: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
    },
    txtcon2: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#ec744a'
    },
    prc:
        {
            fontSize: 17,
            fontWeight: 'bold',
            color: '#000',

        },
    count_view: {
        width: width * 0.3,
        height: height * 0.04,
        backgroundColor: "#d4dfdb",
        borderRadius: 15,
        marginTop: height * 0.05,
        marginLeft: width * 0.01,
        justifyContent: 'space-between',
        flexDirection: 'row'

    },

    plus: {
        fontSize: 25,
        marginRight: width * 0.04,
        color: '#ec744a'

    },
    minus: {
        fontSize: 25,
        marginLeft: width * 0.04
    },
    address: {
        width: width,
        height: height * 0.075,
        // backgroundColor:'#f00',
        //  marginTop: height * 0.02,

        flexDirection: 'column'


    },
    labeladdress: {
        color: 'grey',
        fontSize: 15,
        marginTop: height * 0.02,
        marginLeft: width * 0.04
    },
    txtaddress: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 17,
        marginLeft: width * 0.04,

    },
    card: {
        width: width * 0.7,
        height: height * 0.06,
        backgroundColor: '#ec744a',
        borderRadius: 12,
        alignSelf: 'center',
        marginTop: height * 0.05

    }

})

