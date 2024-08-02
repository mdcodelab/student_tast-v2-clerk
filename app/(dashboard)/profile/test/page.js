"use client";
import { questions } from "@/utils/questions";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@//components/ui/radio-group";
import { Button } from "@//components/ui/button";
import { Input } from "@//components/ui/input";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { getGroup, getAnswers, updateUser } from "@/app/actions/userActions";

import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

function Test() {
  //get user id from Clerk
  const { isLoaded, isSignedIn, user } = useUser();
  //set its initial id value === null and the caputured it
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

  const[group, setGroup]=useState("");
  const handleGroup = (e) => {
    setGroup(e.target.value);
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await getGroup(group);
      await getAnswers(answers, group);
      console.log("Submitted answers:", answers);
      await updateUser(userId, answers, group);
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
      <Button as Child variant="default" className="flex gap-x-2 mb-8">
        <Link href="/profile" className="flex items-center">
          <h2 className="w-30 flex items-center justify-center gap-2">
            <MdKeyboardDoubleArrowLeft
              style={{ fontSize: "1.5rem" }}
            ></MdKeyboardDoubleArrowLeft>
            Back to Info
          </h2>
        </Link>
      </Button>

      <>
        <form onSubmit={onSubmit} className="shadow-lg">
          {/* Input pentru grupa*/}

          <div className="w-full flex items-center gap-2 my-8">
            <Label htmlFor="grupa" className="text-lg">Enter your group number:</Label>
            <Input type="text" className="w-[150px] bordered border-black" name="grupa" 
            value={group} placeholder="Group number..." onChange={handleGroup}></Input>
          </div>
          
          {/* Inputuri pentru raspunsuri*/}
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
