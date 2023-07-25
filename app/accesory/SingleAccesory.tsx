"use client";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import CustomInput from "../components/CustomInput";
import FormBTN from "../components/FormBTN";
interface Props {
  id: any;
  price?: string;
  imageSrc?: string;
  name?: string;
  description?: string | null;
}

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
const styles = {
  purchaseBTN: {
    backgroundColor: "hsl(265,75%,50%)",
    color: "white",
    alignItems: "center",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    borderRadius: ".25rem",
    boxShadow: "rgba(0, 0, 0, 0.02) 0 1px 3px 0",
    boxSizing: "border-box",
    cursor: "pointer",
    display: "inline-flex",
    fontFamily:
      'system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif',
    fontSize: "16px",
    justifyContent: "center",
    lineHeight: "1.25",
    margin: "20px",
    minHeight: "3rem",
    padding: "calc(.875rem - 1px) calc(1.5rem - 1px)",
    position: "relative",
    textDecoration: "none",
    userSelect: "none",
    verticalAlign: "baseline",
    width: "auto",
  },
  cartBTN: {
    backgroundColor: "grey",
    color: "white",
    alignItems: "center",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    borderRadius: ".25rem",
    boxShadow: "rgba(0, 0, 0, 0.02) 0 1px 3px 0",
    boxSizing: "border-box",
    cursor: "pointer",
    display: "inline-flex",
    fontFamily:
      'system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif',
    fontSize: "16px",
    justifyContent: "center",
    lineHeight: "1.25",
    margin: "20px",
    minHeight: "3rem",
    padding: "calc(.875rem - 1px) calc(1.5rem - 1px)",
    position: "relative",
    textDecoration: "none",
    userSelect: "none",
    verticalAlign: "baseline",
    width: "auto",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px",
    padding: "10px",
  },
  columns: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px",
    padding: "10px",
  },
};

export default function SingleAccesory({
  price,
  imageSrc,
  id,
  name,
  description,
}: Props) {
  const router = useRouter();
  initialValue.productID = id;
  const [state, setState] = useState(initialValue);
  const [showForm, setShowForm] = useState(false);
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
    <div>
      <div className="my-2 grid grid-cols-2 container">
        <div className="columna-1 columns">
          <img src={imageSrc} alt="Image" className="object-contain" />
        </div>
        <div className="columna-2 columns">
          <div>
            {" "}
            <h1 className="text-[4rem]">{name}</h1>
          </div>
          <br />
          <div>
            <h1>USD {price}</h1>
          </div>
          <br />
          <button
            type="submit"
            style={styles.purchaseBTN}
            onClick={() => setShowForm(true)}
          >
            Request Data
          </button>
          <button style={styles.cartBTN} type="submit">
            Add to cart
          </button>
          <p>{description}</p>
        </div>
      </div>
      {showForm && (
        <div className="flex justify-end">
          <div className="flex flex-col h-[900px]">
            <form className="w-[600px] py-12 flex flex-col items-right gap-4">
              <>
                <div className="flex flex-col gap-2 py-4 w-full">
                  <div className="flex flex-row gap-2 py-4 w-full">
                    <div className="flex-1">
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
                    </div>
                    <div className="flex-1">
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
                    </div>
                  </div>
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
      )}
    </div>
  );
}
