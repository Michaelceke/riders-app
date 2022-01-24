import React from "react";
import { Box, FlatList } from "native-base";
import { batchData, BatchDataType } from "@src/_shared/dummyData/batchData";
import BatchCardX from "./BatchCardX";

interface BatchCardXListProps {
  items?: BatchDataType[];
}

const BatchCardXList: React.FC<BatchCardXListProps> = () => (
  // const [select, setSelect] = React.useState(true);

  <Box>
    <FlatList
      horizontal
      data={batchData}
      renderItem={BatchCardX}
      keyExtractor={(batch: BatchDataType) => batch.batchId}
      showsHorizontalScrollIndicator={true}
      // onEndReachedThreshold={5}
      initialNumToRender={2}
    />
  </Box>
);
export default BatchCardXList;
