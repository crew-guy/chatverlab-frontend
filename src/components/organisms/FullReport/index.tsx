import React, { useEffect, useState } from 'react';
import { Document, Page, Text, StyleSheet, View, Image, Link } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  title: {
    fontSize: 24,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 18,
    margin: 12
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify'
  }
});

// const fetchImage = async (url) => {
//   const corsProxy = "https://cors-anywhere.herokuapp.com/"; // CORS Proxy
//   const response = await fetch(corsProxy + url);
//   const blob = await response.blob();
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.onloadend = () => resolve(reader.result);
//     reader.onerror = reject;
//     reader.readAsDataURL(blob);
//   });
// };


const FullReport = ({ appState }) => {
  // const [imageData, setImageData] = useState(null);

  // useEffect(() => {
  //   fetchImage(appState.sysDiagUrl)
  //     .then(data => {
  //       setImageData(data);
  //     })
  //     .catch(error => {
  //       console.error("Failed to fetch image:", error);
  //     });
  // }, [appState.sysDiagUrl]);
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Business Problem</Text>
          <Text style={styles.text}>{appState.bizProb}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Questions and Answers</Text>
          {appState.answers.map((answer, index) => (
            <Text key={index} style={styles.text}>{answer}</Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Architecture Object</Text>
          <Text style={styles.subtitle}>Introduction</Text>
          <Text style={styles.text}>{appState.archiObj.data.introduction}</Text>

          {appState.archiObj.data.layers.map((layer, index) => (
            <View key={index}>
              <Text style={styles.subtitle}>{layer.title}</Text>
              <Text style={styles.text}>{layer.purpose}</Text>
              {layer.key_features.map((feature, index) => (
                <Text key={index} style={styles.text}>{feature.explanation}</Text>
              ))}
            </View>
          ))}
          <Link src={appState.sysDiagUrl} >Complete Architecture Diagram</Link>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Cloud Cost</Text>
          <Text style={styles.text}>Total Cost: {appState.cloudCost.totalCost}</Text>
          {appState.cloudCost.stepByStepCost.map((cost, index) => (
            <Text key={index} style={styles.text}>{cost}</Text>
          ))}
        </View>
      </Page>
    </Document>
  )
};

export default FullReport;
