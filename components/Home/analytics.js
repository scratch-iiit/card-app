import React, { useState } from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity, button, style, ScrollView, navigation, SafeAreaView, } from 'react-native';
import { Ionicons, FontAwesome, AntDesign, Entypo, SimpleLineIcons, MaterialCommunityIcons, Foundation } from "@expo/vector-icons"



export default function analytics() {
    return (
        <View style={{ backgroundColor: "white", flex: 1, paddingTop: 55, paddingHorizontal: 20 }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <TouchableOpacity style={{ marginHorizontal: 120 }}>
                    <Ionicons name="grid-outline" size={24} color="black" />
                </TouchableOpacity>


                <Text style={{ fontWeight: "bold", fontSize: 20 }}>***9316</Text>

                <View style={{ flexDirection: "row" }}>

                    <TouchableOpacity style={{ marginHorizontal: 120 }}>
                        <Ionicons name="notifications-outline" size={24} color="black" />

                    </TouchableOpacity>
                </View>




            </View>






        </View>






    );
}



