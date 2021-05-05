import React from 'react';
import {View, Text, StyleSheet} from 'react-native';  
import Itens from './Itens';
import {db} from './config/config';
     
class ListaItens extends React.Component{

        State = {
            itens: []
        };
        ComponentDidMount(){
    
            db.collection('itens').get().then((resultado)=>{
    
                const itens =[]
                resultado.forEach((doc)=>{
                    itens.push(id:doc.id,item:doc.data()['item']})
                })
    
                this.setState(itens)
            }
            render(){
                return(
                    <View style={styles.conteudoPrincipal}>
                        {
                            this.state.itens.lenght > 0
                            ? <Itens itens={this.state.itens}/>
                            : <Text>Não há itens salvos</Text>
                        }
                    </View>
                )
            }
        }
    
        export default ListaItens;
    
        const styles = StyleSheet.create({
            conteudoPrincipal:{
                flex: 1,    
                justifyContent: 'center',
                backgroundColor: 'blue',
        }
    });