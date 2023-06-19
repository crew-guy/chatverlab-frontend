import React, { useEffect, useState } from 'react';
import { Document, Page, Text, StyleSheet, View, Image, Link } from '@react-pdf/renderer';
// Define styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    color: '#000'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 12,
  },
  docLink: {
    fontSize: 12,
    color: 'blue',
    textDecoration: 'underline',
  },
});

// PDF document component
const FullReport = ({ messages }) => {
  console.log({ messages })
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {messages?.map((message, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.title}>{message.sender} says:</Text>
            <Text style={styles.message}>{message.content}</Text>
            {message.sourceDocs && message.sourceDocs.map((doc, i) => (
              <Link key={i} style={styles.docLink} src={doc.source}>{doc.title}</Link>
            ))}
          </View>
        ))}
      </Page>
    </Document>
  )
};

export default FullReport;
