import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import ButtonComp from "../../components/atoms/buttonComp";
import { SafeAreaView } from "react-native-safe-area-context";
import Cards from '../../components/atoms/card';

const Application_Process = () => {
  return (
    <SafeAreaView style={styles.container}>

      {/* Application Process */}
      <Cards>
        <Text style={styles.heading}>Application Process</Text>

        {[
          {
            step: "1",
            title: "Submit Application",
            subtitle: "Complete online application form",
          },
          {
            step: "2",
            title: "Document Review",
            subtitle: "Embassy reviews application documents",
          },
          {
            step: "3",
            title: "Written Examination",
            subtitle: "Take subject-specific written test",
          },
          {
            step: "4",
            title: "Interview",
            subtitle: "Final interview with embassy officials",
          },
        ].map((item) => (
          <View key={item.step} style={styles.processRow}>
            <View style={styles.stepCircle}>
              <Text style={styles.stepText}>{item.step}</Text>
            </View>
            <View>
              <Text style={styles.stepTitle}>{item.title}</Text>
              <Text style={styles.stepSubtitle}>{item.subtitle}</Text>
            </View>
          </View>
        ))}
     </Cards>


      {/* Required Documents */}
      <Cards>
        <Text style={styles.heading}>Required Documents</Text>
        {[
          { label: "Application Form", icon: "file-document-outline" },
          { label: "Academic Transcripts", icon: "school-outline" },
          { label: "Degree Certificate", icon: "certificate-outline" },
          { label: "Recommendation Letters", icon: "email-outline" },
          { label: "Passport Copy", icon: "passport" },
        ].map((doc, i) => (
          <View key={i} style={styles.docRow}>
            <View style={styles.docLabel}>
              <Icon
                name={doc.icon}
                size={20}
                color="#C3352B"
                style={{ marginRight: 8 }}
              />
              <Text>{doc.label}</Text>
            </View>
            <FontAwesome name="download" size={18} color="#888" />
          </View>
        ))}
      </Cards>

      {/* Important Dates */}
      <View style={styles.important_date}>
        <Text style={styles.heading}>Important Dates</Text>

        <View style={styles.dateRow}>
          <Text style={styles.dateLabel}>Application Opens</Text>
          <Text style={styles.dateText}>September 1, 2023</Text>
        </View>
        <View style={styles.dateRow}>
          <Text style={styles.dateLabel}>Application Deadline</Text>
          <Text style={styles.dateText}>December 15, 2023</Text>
        </View>
        <View style={styles.dateRow}>
          <Text style={styles.dateLabel}>Written Exam</Text>
          <Text style={styles.dateText}>February 2024</Text>
        </View>
        <View style={styles.dateRow}>
          <Text style={styles.dateLabel}>Results Announced</Text>
          <Text style={styles.dateText}>May 2024</Text>
        </View>
      </View>

      {/* Button */}
      <ButtonComp
        title="Talk To A Counselor"
        style={styles.talk_to_a_counslor}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdf7f6",
  },
  heading: {
    fontSize: 18,
    marginBottom: 15,
    color: "#333",
  },
  processRow: {
    flexDirection: "row",
    marginBottom: 15,
    alignItems: "flex-start",
  },
  stepCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#C3352B",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  stepText: {
    color: "#fff",
  },
  stepTitle: {
    fontWeight: "600",
    color: "#222",
  },
  stepSubtitle: {
    fontSize: 12,
    color: "#555",
  },
  docRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#eee",
  },
  docLabel: {
    flexDirection: "row",
    alignItems: "center",
  },
  dateRow: {
    marginBottom: 10,
  },
  dateLabel: {
    fontWeight: "500",
    color: "#333",
  },
  dateText: {
    fontSize: 12,
    color: "#666",
  },
  important_date: {
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  talk_to_a_counslor: {
    backgroundColor: "#C3352B",
    borderRadius: 8,
  },
});

export default Application_Process;
