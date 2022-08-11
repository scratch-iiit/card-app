import React, { useState } from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity, button, style, ScrollView, navigation, SafeAreaView, } from 'react-native';
import { Ionicons, FontAwesome, AntDesign, Entypo, SimpleLineIcons, MaterialCommunityIcons, Foundation, MaterialIcons, Feather } from "@expo/vector-icons"



export default function home({ navigation }) {
    return (
        <View style={{ backgroundColor: "white", flex: 1, paddingTop: 55, paddingHorizontal: 20 }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <TouchableOpacity style={{ marginHorizontal: 120 }}>
                    <Ionicons name="grid-outline" size={27} color="black" />
                </TouchableOpacity>


                <Text style={{ fontWeight: "bold", fontSize: 20 }}>***9000</Text>

                <View style={{ flexDirection: "row" }}>

                    <TouchableOpacity style={{ marginHorizontal: 120, }}>
                        <Ionicons name="notifications-outline" size={27} color="black" />

                    </TouchableOpacity>
                </View>




            </View>

            <View style={{ flex: 1, paddingTop: 50, paddingHorizontal: 100, alignItems: "center", shadowColor: "#000", shadowOffset: { width: 0, height: 5 }, shadowOpacity: 0.90, shadowRadius: 6.78, elevation: 11 }}>

                <Image style={{ width: 350, height: 200, borderRadius: 20, }} source={require("../../assets/mastercardplat.png")} />

            </View>

            <View style={{ width: 52, height: 50, backgroundColor: "#333333", marginLeft: 330, marginBottom: 1, borderRadius: 15, justifyContent: "center", marginTop: 230, paddingLeft: 11 }}>

                <TouchableOpacity>

                    <Feather name="plus-circle" size={30} color="white" />

                </TouchableOpacity>


            </View>

            <View style={{ width: 52, height: 55, backgroundColor: "#333333", marginLeft: 220, marginBottom: 80, borderRadius: 15, justifyContent: "center", marginTop: -56, paddingLeft: 11 }}>

                <TouchableOpacity onPress={() => { navigation.navigate("analytics") }}>

                    <MaterialIcons name="analytics" size={30} color="white" />

                </TouchableOpacity>


            </View>




            <View style={{ width: 349, height: 90, backgroundColor: "#333333", marginLeft: 133, marginBottom: 320, borderRadius: 25, justifyContent: "center", marginTop: -56, paddingLeft: 11, }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginLeft: 5 }}>

                    <Image style={{ width: 30 }} source={require("../../assets/face1.png")} />

                </ScrollView>


            </View>



            <View style={{ marginLeft: 133, marginBottom: 320, borderRadius: 25, marginTop: -290, paddingLeft: 11, }}>

                <Text style={{ color: "#adadad", fontWeight: "bold", }}>Today </Text>

            </View>


            <View style={{ marginLeft: 397, marginBottom: 330, borderRadius: 25, marginTop: -335, paddingLeft: 11, }} >

                <Text style={{ marginLeft: 10, }}>-$243.43</Text>

            </View>



            <TouchableOpacity>

                <View style={{ marginLeft: 128, marginBottom: 320, borderRadius: 25, marginTop: -305, paddingLeft: 11, }} >

                    <Image style={{ width: 40, height: 30, borderRadius: 15 }} source={require("../../assets/bking.png")}></Image>

                </View>

                <View style={{ marginLeft: 178, marginBottom: 320, borderRadius: 25, marginTop: -350, paddingLeft: 11, }}>

                    <Text style={{ fontWeight: "bold" }}>Burger King</Text>

                </View>

                <View style={{ marginLeft: 397, marginBottom: 330, borderRadius: 25, marginTop: -329, paddingLeft: 11, }}>

                    <Text style={{ marginLeft: 10, color: "black", fontWeight: "bold" }}> -$65.13</Text>

                </View>

                <View style={{ marginLeft: 175, marginBottom: 320, borderRadius: 25, marginTop: -337, paddingLeft: 11, }}>

                    <Text style={{ color: "#adadad" }}> Food & Drinks </Text>

                </View>

            </TouchableOpacity>





            <TouchableOpacity>

                <View style={{ marginLeft: 117, marginBottom: 320, borderRadius: 25, marginTop: -290, paddingLeft: 11, }} >

                    <Image style={{ width: 60, height: 30, borderRadius: 15 }} source={require("../../assets/kfc.png")}></Image>

                </View>

                <View style={{ marginLeft: 178, marginBottom: 320, borderRadius: 25, marginTop: -350, paddingLeft: 11, }}>

                    <Text style={{ fontWeight: "bold" }}>KFC</Text>

                </View>


                <View style={{ marginLeft: 397, marginBottom: 330, borderRadius: 25, marginTop: -329, paddingLeft: 11, }}>

                    <Text style={{ marginLeft: 10, color: "black", fontWeight: "bold" }}> -48.32</Text>

                </View>

                <View style={{ marginLeft: 175, marginBottom: 320, borderRadius: 25, marginTop: -337, paddingLeft: 11, }}>

                    <Text style={{ color: "#adadad" }}> Food & Drinks </Text>

                </View>


            </TouchableOpacity>


            <TouchableOpacity>

                <View style={{ marginLeft: 117, marginBottom: 320, borderRadius: 25, marginTop: -290, paddingLeft: 11, }} >

                    <Image style={{ width: 60, height: 30, borderRadius: 15 }} source={require("../../assets/lyft.png")}></Image>

                </View>

                <View style={{ marginLeft: 178, marginBottom: 320, borderRadius: 25, marginTop: -350, paddingLeft: 11, }}>

                    <Text style={{ fontWeight: "bold" }}>LYFT</Text>

                </View>


                <View style={{ marginLeft: 397, marginBottom: 330, borderRadius: 25, marginTop: -329, paddingLeft: 11, }}>

                    <Text style={{ marginLeft: 10, color: "black", fontWeight: "bold" }}> -14.18</Text>

                </View>

                <View style={{ marginLeft: 175, marginBottom: 320, borderRadius: 25, marginTop: -337, paddingLeft: 11, }}>

                    <Text style={{ color: "#adadad" }}> Transportation </Text>

                </View>



            </TouchableOpacity>


            <TouchableOpacity>

                <View style={{ marginLeft: 117, marginBottom: 320, borderRadius: 25, marginTop: -290, paddingLeft: 11, }} >

                    <Image style={{ width: 60, height: 30, borderRadius: 15 }} source={require("../../assets/movie.png")}></Image>

                </View>

                <View style={{ marginLeft: 178, marginBottom: 320, borderRadius: 25, marginTop: -350, paddingLeft: 11, }}>

                    <Text style={{ fontWeight: "bold" }}>Cineworld</Text>

                </View>


                <View style={{ marginLeft: 397, marginBottom: 330, borderRadius: 25, marginTop: -329, paddingLeft: 11, }}>

                    <Text style={{ marginLeft: 10, color: "black", fontWeight: "bold" }}> -58.51</Text>

                </View>

                <View style={{ marginLeft: 175, marginBottom: 320, borderRadius: 25, marginTop: -337, paddingLeft: 11, }}>

                    <Text style={{ color: "#adadad" }}> Entertainment </Text>

                </View>



            </TouchableOpacity>

























        </View>






    );
}
