import React from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image } from 'react-native';
import flatListData from '../assets/flatListData.js';
import colors from '../Themes/Colors.js'

class FlatListItem extends React.Component {
    render() {          
        return (        
            <View style={{
                flex: 1,
                flexDirection:'column',                                
            }}>            
                <View style={{
                        flex: 1,
                        flexDirection:'row',
                        backgroundColor: this.props.index % 2 == 0 ? colors['primary'] : 'grey'              
                        //backgroundColor: 'navy'
                }}>            
                    <Image 
                        source={{uri: this.props.item.imageUrl}}
                        style={{width: 100, height: 100, margin: 5}}
                    >

                    </Image>
                    <View style={{
                            flex: 1,
                            flexDirection:'column',   
                            height: 100                 
                        }}>            
                            <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                            <Text style={styles.flatListItem}>{this.props.item.foodDescription}</Text>
                    </View>              
                </View>
                <View style={{
                    height: 1,
                    backgroundColor:'white'                            
                }}>
            
                </View>
          </View>
        );
    }
}
const styles = StyleSheet.create({
    flatListItem: {
        color: 'black',
        padding: 10,
        fontSize: 16,  
    }
});

export default class BasicFlatList extends React.Component {
    render() {
      return (
        <View style={{flex: 1}}>
            <FlatList 
                data={flatListData}
                renderItem={({item, index})=>{
                    //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                    return (
                    <FlatListItem item={item} index={index}>

                    </FlatListItem>);
                }}
                >

            </FlatList>
        </View>
      );
    }
}