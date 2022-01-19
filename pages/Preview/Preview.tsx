import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});


const Preview = () => {

  const data = useSelector((state: RootState) => state.invoice)
  let [state, setState] = useState(data);

  useEffect(() => {
    console.log(data);
  }, [data])



  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          {JSON.stringify(data)}
          <Text>Section #1:{data.vendorNIP}</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  )
}

export default Preview;