"use client";
import Link from "next/link";
import styles from "./page.module.css";
import styled from "styled-components";
export default function Home() {
  return (
    <DIV>
      <h1>hi click</h1>
      <Link href={"/login"}>click me here please</Link>
      <br />
      <Link href={"/about"}>click me here please</Link>
    </DIV>
  );
}

let DIV = styled.div`
  background-color: teal;
  color: white;
  height:100vh;
  transition:all 2s ease-in-out;
`;


