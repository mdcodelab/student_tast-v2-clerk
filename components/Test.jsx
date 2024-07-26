"use client";
import { questions } from "../questions";
import { correctAnswers } from "../questions";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Button } from "../components/ui/button";
import { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import { getAnswers } from "@/app/actions/getAnswers";

import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

function Test() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  // Handle change for each quwersestion's answer
  const handleChange = (questionIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await getAnswers(answers);
      console.log("Submitted answers:", answers);
       toast.success("Test sent successfully!");
    } catch (error) {
      toast.error("Error. Try again!");
      console.log(error);
    }
  };

  
  const totalScore=0;
  const finalResult = () => {
    let totalScore = 0;
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] !== null && answers[i].toString() === correctAnswers[i].toString()) {
        totalScore += 0.3;
      }
    }
    return totalScore+1;
  };

  return (
    <>
      <Button as Child variant="default" className="flex gap-x-2 mb-2">
        <MdKeyboardDoubleArrowLeft></MdKeyboardDoubleArrowLeft>{" "}
        <Link href="/profile" className="w-20 flex items-center">
          <h2>Inapoi la Info</h2>
        </Link>
      </Button>
      <div className="w-full">
        <h1 className="text-xl mt-10 mb-2 font-bold">&#128512; Rezultat: {finalResult().toFixed(2)}</h1>
      </div>
      <>
        <form onSubmit={onSubmit}>
          {questions.map((item, questionIndex) => {
            const { id, question, answers: options } = item;
            return (
              <div key={id} className="mb-10 py-4 shadow">
                <h1 className="text-xl font-semibold">
                  {id}. {question}
                </h1>
                <RadioGroup
                  value={answers[questionIndex]}
                  onValueChange={(value) => handleChange(questionIndex, value)}
                >
                  {options.map((option, optionIndex) => (
                    <div
                      className="flex items-center space-x-2"
                      key={optionIndex}
                    >
                      <RadioGroupItem
                        value={optionIndex.toString()} // Store option index as string
                        id={`option-${id}-${optionIndex}`}
                      />
                      <Label
                        htmlFor={`option-${id}-${optionIndex}`}
                        className="text-xl"
                      >
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            );
          })}
          <Button type="submit" className="w-full text-xl">
            Trimite
          </Button>
        </form>
      </>
    </>
  );
}

export default Test;
