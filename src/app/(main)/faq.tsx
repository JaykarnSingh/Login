import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import ButtonComp from "../../components/atoms/buttonComp";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const categories = [
  {
    title: "Admissions",
    icon: <Ionicons name="school" size={22} color="#D7000F" />,
    questions: [
      "When are university applications due in Japan?",
      "What documents do I need for application?",
      "Do I need to know Japanese to study in Japan?",
      "How competitive is admission to Japanese universities?",
    ],
  },
  {
    title: "Scholarships",
    icon: <MaterialIcons name="emoji-events" size={22} color="#D7000F" />,
    questions: [
      "What scholarships are available for international students?",
      "How competitive is the MEXT scholarship?",
      "When should I apply for scholarships?",
    ],
  },
  {
    title: "Visa Information",
    icon: <MaterialIcons name="public" size={22} color="#D7000F" />,
    questions: [
      "What type of visa do I need to study in Japan?",
      "How long does the visa application process take?",
      "Can I work part-time with a student visa?",
    ],
  },
  {
    title: "Living in Japan",
    icon: <FontAwesome5 name="home" size={22} color="#D7000F" />,
    questions: [
      "What are the accommodation options for students?",
      "What are the costs of living in Japan?",
      "What are the best cities to live in Japan?",
    ],
  },
];

export default function Faq() {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index: any) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Frequently Asked Questions</Text>
        <Text style={styles.subtitle}>
          Everything you need to know about studying in Japan
        </Text>

        {categories.map((category, idx) => (
          <View key={idx} style={styles.section}>
            <View style={styles.sectionHeader}>
              {category.icon}
              <Text style={styles.sectionTitle}> {category.title}</Text>
            </View>

            {category.questions.map((question, qIdx) => (
              <TouchableOpacity
                key={qIdx}
                style={styles.questionBox}
                onPress={() => toggleExpand(`${idx}-${qIdx}`)}
              >
                <View style={styles.questionRow}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.questionText}>{question}</Text>
                  </View>
                  <Text style={styles.expandIcon}>+</Text>
                </View>
                {expanded === `${idx}-${qIdx}` && (
                  <Text style={styles.answerText}>
                    This is a placeholder answer for `{question}`.
                  </Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        ))}

        <ButtonComp
          title="Talk To A Counselor"
          style={styles.talk_to_a_counselor}
          icon={<FontAwesome name="comments" size={20} color="#fff" />}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    padding: 18,
    gap: 5,
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "400",
    marginBottom: 16,
    color: "#4B5563",
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "400",
    marginLeft: 8,
  },
  questionBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
    elevation: 1,
    shadowColor: "#000",
    shadowOpacity: 0.7,
  },
  questionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  questionText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#333333",
  },
  expandIcon: {
    fontSize: 24,
    color: "#D7000F",
  },
  answerText: {
    marginTop: 8,
    color: "#555",
    fontSize: 13,
  },
  talk_to_a_counselor: {
    backgroundColor: "#C3352B",
    borderRadius: 8,
    marginBottom: 25,
  },
});
