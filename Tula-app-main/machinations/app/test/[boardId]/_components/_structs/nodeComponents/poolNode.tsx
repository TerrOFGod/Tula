"use client";
import { useAnimateScheme } from "@/app/store/use-animate-scheme";
import { memo, useEffect } from "react";
import {
  Edge,
  Node,
  NodeResizer,
  useEdges,
  useNodeId,
  useNodes,
} from "reactflow";
import useStore from "@/app/store/use-store";
import { StructType } from "@/app/types/structs";
import { StyledNode } from "./styled-node";

interface DataProps {
  id: string;
  data: {
    label: string;
    struct: StructType;
    name: string;
  };
  selected: boolean;
}

const PoolNode = ({ data: { label, struct, name }, selected, id }: DataProps) => {
  const { isPlay, onStop, onReset, time, gamesCount, resetNodes } = useAnimateScheme();
  const { setNodeLabel, getEdgeValues } = useStore();
  const nodeId = useNodeId();
  const edges = useEdges();
  const nodes = useNodes();
  useEffect(() => {
    let intervalId = null;
    if (isPlay) {
      let newEdges = edges.filter((edge) => edge.target === nodeId)
      const sumOfData = newEdges.reduce((accumulator, currentEdge) => {
        return accumulator + (+currentEdge.data || 0); 
      }, 0);
      intervalId = setInterval(() => {


        setNodeLabel(nodeId, (parseInt(label) + sumOfData).toString());
      }, time * 1000);
    }
    return () => clearInterval(intervalId);
  }, [isPlay, onStop, onReset, label, gamesCount]);

  return (
    <>
      <NodeResizer
        color="blue"
        isVisible={selected}
        minWidth={45}
        minHeight={45}
      />
      
      <StyledNode struct={struct} label={label} name={name} />
    </>
  );
};

export default memo(PoolNode);