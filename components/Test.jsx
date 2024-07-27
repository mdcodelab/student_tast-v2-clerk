"use client";
import { questions } from "@/utils/questions";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Button } from "../components/ui/button";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { getAnswers, updateUser } from "@/app/actions/userActions";

import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

function Test() {
  //get user id from Clerk
  const { isLoaded, isSignedIn, user } = useUser();
  //set its inital id value === null and the caputured it
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    if (isLoaded && isSignedIn && user) {
      setUserId(user.id);
    }
  }, [isLoaded, isSignedIn, user]);

  console.log("User este:", user);
  console.log("ID este:", userId);

  //capture user answers
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
      await updateUser(userId, answers);
      toast.success("Test sent successfully!");
    } catch (error) {
      toast.error("Error. Try again!");
      console.log(error);
    }
  };

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <>
      <Button as Child variant="default" className="flex gap-x-2 mb-2">
        <MdKeyboardDoubleArrowLeft></MdKeyboardDoubleArrowLeft>{" "}
        <Link href="/profile" className="w-20 flex items-center">
          <h2>Inapoi la Info</h2>
        </Link>
      </Button>
      {/*  rezultat*/}

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
