"use client";
import { useGlobalState } from "@/app/context/globalProvider";
import React from "react";
import styled from "styled-components";
import CreateContent from "../Modals/CreateContent";
import TaskItem from "../TaskItem/TaskItem";
import { add, plus } from "@/app/utils/Icons";
import Modal from "../Modals/Modal";

function Tasks()  {
    const {theme} = useGlobalState()
  
    return <TaskStyled theme={theme}>Tasks</TaskStyled>

}

const TaskStyled = styled.div`
width: 100%;

`;

export default Tasks
