import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

export default class Inicial extends React.Component{
    render(){
        return(
            <View style={styles.conteudoBtns}>
                <Button style={styles.conteudoBtns}
                    title="Adicionar Item"
                    color="Blue"
                    onPress={() =>
                    this.props.navigation.navigate('AdicionaItens')
                    }
                />
                <Button style={styles.conteudoBtns}
                    title="Lista Itens"
                    color="Red"
                    onPress={() =>
                    this.props.navigation.navigate('ListaItens')
                    }
                />

            </View>    

        );
        }

}
const styles = StyleSheet.create({
    conteudoBtns:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
});
