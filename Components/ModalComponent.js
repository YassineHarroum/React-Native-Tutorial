import React from 'react';

import {
    View,
    Modal,
    Text,
    Pressable,
    StyleSheet,
} from 'react-native';

const ModalComponent = (props) => {
    return (
        <Modal
            visible={props.visibility}
            transparent
            onRequestClose={props.functionClose}
            animationType='slide'
        >
            <View style={styles.centered_view}>
                <View style={styles.warning_modal}>
                    <View style={styles.warning_title}>
                        <Text style={styles.text}>Warning !</Text>
                    </View>
                    <View style={styles.warning_body}>
                        {props.functionUserName?
                            null
                            :
                            <Text style={{ fontSize: 15, textAlign: 'center' }}>
                                - Please Enter a valide User name.
                            </Text>
                        }
                        {props.functionBoite?
                            null
                            :
                            <Text style={{ fontSize: 15, textAlign: 'center' }}>
                                - Please Enter a valide adress mail.
                            </Text>
                        }
                        {props.functionDest?
                            null
                            :
                            <Text style={{ fontSize: 15, textAlign: 'center' }}>
                                - Please Enter a valide Destination.
                            </Text>
                        }
                        {props.functionPassword.length > 3?
                            null
                            :
                            <Text style={{ fontSize: 15, textAlign: 'center' }}>
                                - Please Enter a valide Password.
                            </Text>
                        }
                    </View>
                    <Pressable
                        onPress={props.functionPress}
                        hitSlop={{ top: 25, bottom: 25, right: 25, left: 25 }}
                        android_ripple='slide'
                        style={styles.press_Warning}
                    >
                        <Text style={{ fontSize: 20 }}>ok</Text>
                    </Pressable>
                </View>
            </View>

        </Modal>
    );
};

const styles = StyleSheet.create({
    centered_view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000099'
    },
    warning_modal: {
        width: 300,
        height: 200,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 20,
        backgroundColor: '#fff'
    },
    warning_title: {
        flex: 1,
        backgroundColor: '#f10185',
        borderWidth: 1,
        borderColor: '#f10185',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    warning_body: {
        flex: 2,
        height: 100,
        justifyContent: 'center'
    },
    press_Warning: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#01b5f1',
        borderWidth: 1,
        borderColor: '#01b5f1',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    text: {
        fontSize: 20,
        margin: 10,
        color: 'black',
        textAlign: 'center', 
    },
});

export default ModalComponent; 