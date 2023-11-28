import React, { useState,useEffect } from 'react';
import { StyleSheet, View, Text, Image, Button, StatusBar,TouchableOpacity, Linking } from 'react-native';
import Smartlook, { Properties } from 'react-native-smartlook-analytics';



export default function App() {
    const [Img, setImg] = useState('https://images.dog.ceo/breeds/havanese/00100trPORTRAIT_00100_BURST20191126134713895_COVER.jpg');

    const getCat = () => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((res) => res.json())
        .then((data) => {
            setImg(data.message);
            // Il est préférable de faire le console.log dans un effet pour voir la valeur mise à jour
        })
        .catch((error) => {
            console.error('Erreur lors de la récupération de l\'image:', error);
        });
    }

    React.useEffect(() => {
        console.log(Img); // Ceci affichera la valeur mise à jour de Img

        

    }, [Img]);



    const openLink = () => {
      Linking.openURL('https://cvdvm.com/');

       // Initialisation de Smartlook
 Smartlook.instance.preferences.setProjectKey(
  '3732c0e19daa550e4747cfe1c41f34c34812be7e'
);
Smartlook.instance.start();
  };

    return (
        <View style={styles.container}>
            <Text>Hello Word hello word!</Text>
            <Image
                source={{ uri: Img }}
                style={styles.Img}
            />
            <Button
                onPress={getCat}
                title="nouvelle image"
                color="#0084c3"
                accessibilityLabel="Learn more about this purple button"
            />
          
            <TouchableOpacity onPress={openLink}>
                <Text style={styles.linkText}>Visitez cvdvm.com</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Img: {
        width: '60%',
        height: '60%',
        marginBottom: '5%'
    },
    linkText: {
      color: '#0000EE',
      marginTop: 20,
      textDecorationLine: 'underline'
  }
});
