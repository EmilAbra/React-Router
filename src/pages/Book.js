import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

export default function Book() {
  const { id } = useParams();
  const helloWorld = useOutletContext();

  return (
    <h1>
      Book {id}. Hello {helloWorld?.hello}!
    </h1>
  );
}
