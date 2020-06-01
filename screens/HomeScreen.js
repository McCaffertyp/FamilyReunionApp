import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, Alert, ImageBackground } from "react-native";
import Toast from "react-native-tiny-toast";
import Colors from "../constants/Colors";

const dHeight = Dimensions.get("window").height;
const dWidth = Dimensions.get("window").width;

var Spost1 = "The heckles am I gonna write? I do not know. This is for an assignment, so it's just writing what a post may say, ya know?"
var Spost2 = "Here, I'll write a story and I'll make sure to label what parts are which so that the reader doesn't get too incredibly lost. There will be 7 parts";
var Spost3 = "Part 1: It's morning, you have just woken up. What a wonderful day to be a Computer Scientist.";
var Npost1 = "Part 2: You decide to be productive today. First, you walk outside where everything is gorgeous. But wait... something's weird...";
var Npost2 = "Part 3: That's right! You're a CS Major! Why are you outside? That's what threw you off. Time you go back inside.";
var Npost3 = "Part 4: Now back in your incredible cave called a 'room,' preparations begin for the longest night ever. What will happen...";
var Opost1 = "Part 5: Nothing. Nothing happened all night except coding. Working late on an assignment again has led to one more horrid night of rest, well... if you had gone to bed.";
var Opost2 = "Part 6: You didn't go to bed. Are you regretting it? No. Of course not. CS Majors don't ACTUALLY sleep. We just code all the time. Then game, then code... then...";
var Opost3 = "Part 7: We ransack the fridge late at night, stuff our mouths, then go to bed satisfied with our procrastination. The End.";

var people = ["Smudge the Cat", "Natsu", "Octane"];
var relation = ["Pet", "Brother", "Car"];
var postDates = [["Yesterday", "Tomorrow", "2 Weeks Ago"], ["6 Days Ago", "Sunday", "Yesterday"], ["Today", "Unknown", "Never"]];
var personPosts = [[Spost1, Spost2, Spost3], [Npost1, Npost2, Npost3], [Opost1, Opost2, Opost3]];
var profileImage = <Image style={{ resizeMode: "contain", height: 120, width: 120 }}
    source={require("../assets/" + "Smudge_Cat_Meme.png")}
/>

const HomeScreen = props => {
    const [profileDisplay, setProfileDisplay] = useState(0);
    const [relationDisplay, setRelationDisplay] = useState(0);
    const [datePosted, setDatePosted] = useState("Yesterday");
    const [smudgePostDisplay, setSmudgePostDisplay] = useState(0);
    const [natsuPostDisplay, setNatsuPostDisplay] = useState(0);
    const [octanePostDisplay, setOctanePostDisplay] = useState(0);
    const [postToDisplay, setPostToDisplay] = useState(Spost1);
    const [loveColor, setLoveColor] = useState(null);
    const [loveOpacity, setLoveOpacity] = useState(1.0);
    const [laughColor, setLaughColor] = useState(null);
    const [laughOpacity, setLaughOpacity] = useState(1.0);
    const [sadColor, setSadColor] = useState(null);
    const [sadOpacity, setSadOpacity] = useState(1.0);
    const [angryColor, setAngryColor] = useState(null);
    const [angryOpacity, setAngryOpacity] = useState(1.0);
    //const [isImage, setIsImage] = useState(false);

    function displayPost(num1, num2) {
        setPostToDisplay(personPosts[num1][num2]);
        setDatePosted(postDates[num1][num2]);
    }

    function nextPostPressed() {
        clearReactions();
        if (profileDisplay === 0) {
            if (smudgePostDisplay === 0 || smudgePostDisplay === 1) {
                setSmudgePostDisplay(smudgePostDisplay + 1);
            } else {
                setSmudgePostDisplay(0);
            }
            displayPost(0, smudgePostDisplay);
        } else if (profileDisplay === 1) {
            if (natsuPostDisplay === 0 || natsuPostDisplay === 1) {
                setNatsuPostDisplay(natsuPostDisplay + 1);
            } else {
                setNatsuPostDisplay(0);
            }
            displayPost(1, natsuPostDisplay);
        } else {
            if (octanePostDisplay === 0 || octanePostDisplay === 1) {
                setOctanePostDisplay(octanePostDisplay + 1);
            } else {
                setOctanePostDisplay(0);
            }
            displayPost(2, octanePostDisplay);
        }
    }

    function nextPersonPressed() {
        clearReactions();
        if (profileDisplay === 0 || profileDisplay === 1) {
            setProfileDisplay(profileDisplay + 1);
            setRelationDisplay(relationDisplay + 1);
            if (profileDisplay === 0) {
                //setProfileImage("Natsu_Fire_background.jpg");
                profileImage = <Image style={{ resizeMode: "contain", height: 120, width: 120 }}
                    source={require("../assets/" + "Natsu_Fire_background.jpg")}
                />
                displayPost(1, natsuPostDisplay);
            } else {
                //setProfileImage("OctaneRL.png");
                profileImage = <Image style={{ resizeMode: "contain", height: 120, width: 120 }}
                    source={require("../assets/" + "OctaneRL.png")}
                />
                displayPost(2, octanePostDisplay);
            }
        } else {
            setProfileDisplay(0);
            setRelationDisplay(0);
            //setProfileImage("Smudge_Cat_Meme.png");
            profileImage = <Image style={{ resizeMode: "contain", height: 120, width: 120 }}
                source={require("../assets/" + "Smudge_Cat_Meme.png")}
            />
            displayPost(0, smudgePostDisplay);
        }
    }

    function chosenReaction(pressed) {
        if (pressed === "love") {
            setLoveColor(Colors.pressed);
            setLoveOpacity(0.5);
            setLaughColor(null);
            setLaughOpacity(1.0);
            setSadColor(null);
            setSadOpacity(1.0);
            setAngryColor(null);
            setAngryOpacity(1.0);
        } else if (pressed === "laugh") {
            setLaughColor(Colors.pressed);
            setLaughOpacity(0.5);
            setLoveColor(null);
            setLoveOpacity(1.0);
            setSadColor(null);
            setSadOpacity(1.0);
            setAngryColor(null);
            setAngryOpacity(1.0);
        } else if (pressed === "sad") {
            setSadColor(Colors.pressed);
            setSadOpacity(0.5);
            setLoveColor(null);
            setLoveOpacity(1.0);
            setLaughColor(null);
            setLaughOpacity(1.0);
            setAngryColor(null);
            setAngryOpacity(1.0);
        } else {
            setAngryColor(Colors.pressed);
            setAngryOpacity(0.5);
            setLoveColor(null);
            setLoveOpacity(1.0);
            setLaughColor(null);
            setLaughOpacity(1.0);
            setSadColor(null);
            setSadOpacity(1.0);
        }
    }

    function clearReactions() {
        setLoveColor(null);
        setLoveOpacity(1.0);
        setLaughColor(null);
        setLaughOpacity(1.0);
        setSadColor(null);
        setSadOpacity(1.0);
        setAngryColor(null);
        setAngryOpacity(1.0);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.nextPerson}
                onPress={() => {
                    nextPersonPressed();
                }}
            >
                <Text style={{ color: "white", fontSize: 24 }}>Next Person</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", ...styles.curPersonProfile }}>
                {profileImage}
                <Text style={{ margin: 10, fontSize: 24, fontWeight: "bold" }}>
                    {people[profileDisplay]}{"\n"}Relationship: {relation[relationDisplay]}{"\n"}Post Date: {datePosted}
                </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
                <View style={styles.curPersonPost}>
                    <Text style={{ fontSize: 24, fontWeight: "bold" }}>{postToDisplay}</Text>
                </View>
                <TouchableOpacity style={styles.nextPost}
                    onPress={() => {
                        nextPostPressed();
                    }}
                >
                    <Text style={{ color: "white", fontSize: 26, margin: 22 }}>Next{"\n\n"}Post</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.reactions}>
                <TouchableOpacity style={{ backgroundColor: loveColor }}
                    onPress={() => {
                        Toast.show("You reacted with 'Love!'", {
                            position: -150,
                            containerStyle: {
                                height: 60,
                                width: dWidth * 0.8,
                                backgroundColor: "pink",
                                borderColor: "black",
                                borderWidth: 3,
                                borderRadius: 12
                            },
                            textStyle: {
                                fontSize: 24,
                                fontWeight: "bold",
                                color: "white"
                            }
                        });
                        chosenReaction("love");
                    }}
                >
                    <Image style={{ opacity: loveOpacity, marginLeft: 5, ...styles.reactionButts }}
                        source={require("../assets/FBLove.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: laughColor }}
                    onPress={() => {
                        Toast.show("You reacted with 'Laugh!'", {
                            position: -150,
                            containerStyle: {
                                height: 60,
                                width: dWidth * 0.8,
                                backgroundColor: "orange",
                                borderColor: "black",
                                borderWidth: 3,
                                borderRadius: 12
                            },
                            textStyle: {
                                fontSize: 24,
                                fontWeight: "bold",
                                color: "white"
                            }
                        });
                        chosenReaction("laugh");
                    }}
                >
                    <Image style={{ opacity: laughOpacity, ...styles.reactionButts }}
                        source={require("../assets/FBLaugh.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: sadColor }}
                    onPress={() => {
                        Toast.show("You reacted with 'Sad!'", {
                            position: -150,
                            containerStyle: {
                                height: 60,
                                width: dWidth * 0.8,
                                backgroundColor: "blue",
                                borderColor: "black",
                                borderWidth: 3,
                                borderRadius: 12
                            },
                            textStyle: {
                                fontSize: 24,
                                fontWeight: "bold",
                                color: "white"
                            }
                        });
                        chosenReaction("sad");
                    }}
                >
                    <Image style={{ opacity: sadOpacity, ...styles.reactionButts }}
                        source={require("../assets/FBSad.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: angryColor }}
                    onPress={() => {
                        Toast.show("You reacted with 'Angry!'", {
                            position: -150,
                            containerStyle: {
                                height: 60,
                                width: dWidth * 0.8,
                                backgroundColor: "red",
                                borderColor: "black",
                                borderWidth: 3,
                                borderRadius: 12
                            },
                            textStyle: {
                                fontSize: 24,
                                fontWeight: "bold",
                                color: "white"
                            }
                        });
                        chosenReaction("angry");
                    }}
                >
                    <Image style={{ opacity: angryOpacity, ...styles.reactionButts }}
                        source={require("../assets/FBAngry.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        Alert.alert(
                            "Exit Pressed",
                            "Would you like to exit the app?",
                            [
                                {
                                    text: "NO",
                                    style: "cancel"
                                },
                                {
                                    text: "YES",
                                    onPress: () => props.navigation.popToTop()
                                }
                            ],
                            { cancelable: false }
                        );
                    }}
                >
                    <Image style={styles.exitButt}
                        source={require("../assets/ExitButton.png")}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    nextPerson: {
        alignItems: "center",
        justifyContent: "flex-end",
        width: dWidth,
        height: dHeight * 0.1,
        backgroundColor: Colors.standard,

        borderWidth: 2,
        borderBottomColor: "black",
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0
    },
    curPersonProfile: {
        height: dHeight * 0.135,

        borderWidth: 2,
        borderBottomColor: "black",
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0
    },
    curPersonPost: {
        margin: 25,
        width: dWidth * 0.75,
        alignItems: "center",
        justifyContent: "center"
    },
    nextPost: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.standard,
        width: dWidth * 0.15,
        height: dHeight * 0.67,

        borderWidth: 2,
        borderLeftColor: "black",
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderRightWidth: 0
    },
    reactions: {
        flexDirection: "row",
        borderTopWidth: 2,
        borderTopColor: "black",
        backgroundColor: Colors.standard
    },
    reactionButts: {
        resizeMode: "contain",
        width: 78,
        height: 78,
        borderRadius: 60,
        borderWidth: 1
    },
    exitButt: {
        resizeMode: "contain",
        width: 78,
        height: 78,
        marginLeft: 20
    }
})

export default HomeScreen;