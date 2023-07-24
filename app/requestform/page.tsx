"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import CustomInput from "../components/CustomInput";
import FormBTN from "../components/FormBTN";
import { useRouter } from "next/navigation";

interface InitialValue {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  productID: string;
}

const initialValue: InitialValue = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  productID: "",
};

export default function page(id: any) {
  const router = useRouter();
  initialValue.productID = id.searchParams.id;
  const [state, setState] = useState(initialValue);
  const [loading, setLoading] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [invalid, setInvalid] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
  });

  function isFormValid(): boolean {
    return (
      state.firstName.trim() !== "" &&
      state.lastName.trim() !== "" &&
      state.email.trim() !== "" &&
      state.phone.trim() !== ""
    );
  }

  function isEmailValid(): boolean {
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const result = emailPattern.test(state.email);
    if (result) setEmailValid(true);
    return result;
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setState({ ...state, [event.target.name]: event.target.value });
    setEmailValid(isEmailValid());
    setFormValid(isFormValid());
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    setInvalid({
      firstName: state.firstName.trim() === "",
      lastName: state.lastName.trim() === "",
      email: !emailValid,
      phone: state.phone.trim() === "",
    });

    if (!emailValid) {
      alert("The email is not valid.");
      return;
    }

    if (formValid) {
      setLoading(true);
      axios
        .post("/api/accesories/post", state)
        .then(() => {
          router.push("/");
        })
        .catch((err) => {
          throw new Error(err);
        })
        .finally(() => {
          setLoading(false);
          alert("Information request successfully submitted");
        });
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col h-[900px]">
        <form className="w-[600px] py-12 flex flex-col items-center gap-4">
          <>
            <div className="flex flex-col gap-2 py-4 w-full">
              <CustomInput
                big
                placeholder="First Name"
                id="firstName"
                type="text"
                value={state.firstName}
                name="firstName"
                onChange={handleChange}
                invalid={invalid.firstName}
              />
              <CustomInput
                big
                placeholder="Last Name"
                id="lastName"
                type="text"
                value={state.lastName}
                name="lastName"
                onChange={handleChange}
                invalid={invalid.lastName}
              />
              <CustomInput
                big
                placeholder="Email"
                id="email"
                type="text"
                value={state.email}
                name="email"
                onChange={handleChange}
                invalid={invalid.email}
              />
              <CustomInput
                big
                placeholder="Phone"
                id="phone"
                type="number"
                value={state.phone}
                name="phone"
                onChange={handleChange}
                invalid={invalid.phone}
              />
            </div>
          </>
          <FormBTN label="Submit" onClick={onSubmit} disabled={loading} />
        </form>
      </div>
    </div>
  );
}
