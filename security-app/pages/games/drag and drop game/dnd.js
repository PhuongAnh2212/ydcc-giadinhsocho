import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

// *Gets bug* Omg DnD moment (Roll nat 1 on a perception check)

const answers = [
  {id:1,
  answers: "remain calm and avoid providing any personal information"
},
  {id:2
  ,answers: "Inquire about the reason for their call and why they're contacting you."
  },
  {id:3
    ,answers: "ask for the caller's name and the organization they represent"
  },
  {id:4
    ,answers: "looking up the organization's official contact information and reaching out directly through established channels."
  },
  {id:5
    ,answers: "Hang up immediately"
  },
  {id:6
    ,answers: "verify the legitimacy of callers"
  }
]

const quiz_content= [
  {
    scenario: "You receive a call from someone claiming to be from your bank's fraud department. The caller informs you that there has been suspicious activity detected on your account and they need your personal information to verify your identity and protect your funds. They might mention specific transactions or purchases that seem legitimate to make their story more convincing.",
    questions: [{
      id:1,
      type: "dragndrop",
      question: "What are the initial steps to take when receiving a suspicious call?",
      answers: (1, 2, 3, 5)
},
{
  id:2,
  type: "dragndrop",
  question: "How can you verify if the caller is actually from your bank's fraud department?",
  answers: (1, 2, 6, 5)
}]
  }
  
  ]

const DragnDrop = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Test drag n drop quiz</Text>
      <Button title="Go to Details"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'black'
  },
});

export default DragnDrop;
