import React from "react";
import styles from "../styles/formblock.module.sass";
import Button from "./Button";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Controller, useForm } from "react-hook-form";

const optionsQuest1 = [
  { value: "Digital Marketing", label: "Digital Marketing Promotion" },
  {
    value: "Web Development",
    label: "I need to create/update a website or app",
  },
  { value: "Custom Solutions", label: "I need a custom solution" },
];

const optionsQuest2 = [
  { value: "Yes", label: "Yes" },
  { value: "No", label: "No" },
];

const optionsQuest3 = [
  { value: "Moscow", label: "Moscow" },
  { value: "Nizhny Novgorod", label: "Nizhny Novgorod" },
  { value: "Ekaterinburg", label: "Ekaterinburg" },
  { value: "Irkutsk", label: "Irkutsk" },
];

const optionsQuest4 = [
  { value: "Perfect", label: "Perfect" },
  { value: "Good", label: "Good" },
  { value: "Bad", label: "Bad" },
];

const animatedComponents = makeAnimated();

const FormBlock = ({ id }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  console.log(watch("email"));

  return (
    <div id={id} className={styles.root}>
      <div className={styles.cell1}>
        <h1>Let’s Make Something Great Together!</h1>
      </div>
      <div className={styles.cell2}></div>

      <div className={styles.cell3}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            defaultValue=""
            {...register("email", {
              required: "Enter your email address",
              pattern: {
                message: "Email format is not correct",
                value: /^([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z0-9_-]+)$/,
              },
            })}
            id="emailID"
            name="email"
            className={styles.formInput}
            placeholder="Email Address"
          />

          {errors?.email && (
            <div className={styles.error}>{errors.email.message}</div>
          )}

          <input
            type="text"
            defaultValue=""
            {...register("firstName", { required: "Enter your first name" })}
            id="firstNameID"
            name="firstName"
            className={styles.formInput}
            placeholder="First name"
          ></input>
          {errors?.firstName && (
            <div className={styles.error}>{errors.firstName.message}</div>
          )}

          <Controller
            name="question1"
            control={control}
            defaultValue=""
            //  rules={{ required: "tdcdcrue" }}
            rules={{
              required: "This field is required",
            }}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <>
                <Select
                  id="question1"
                  instanceId="question1"
                  options={optionsQuest1}
                  required
                  value={value}
                  className="customSelect"
                  classNamePrefix="customSelect"
                  isMulti
                  placeholder="How can we help your business? (multi select)"
                  components={animatedComponents}
                  isSearchable={false}
                  onChange={(newValue) => onChange(newValue)}
                />
                {error && <div className={styles.error}>{error.message}</div>}
              </>
            )}
          />

          {/* TextField
    fullWidth
    inputProps={{
        maxLength: 5,
    }}
    sx={{ maxWidth: 600 }}
    label="First Name"
    margin="dense"
    required
/>; */}

          {/* <Controller
    control={control}
    name="firstname"
    render={({ field }) => (
        <TextField
            fullWidth
            {...field}
            sx={{ maxWidth: 600 }}
            label="First Name"
            margin="dense"
            required
            error={!!errors.firstname}
            helperText={errors.firstname && `${errors.firstname.message}`}
        />
    )}
/>; */}

          <textarea
            type="text"
            maxLength="3000"
            defaultValue=""
            {...register("custEnq")}
            id="custEnqID"
            name="custEnq"
            className={styles.formInput}
            placeholder="Your question (optional)"
          ></textarea>

          <div>
            <Button className={styles.button} type="submit">
              SUBMIT
            </Button>
          </div>
        </form>
      </div>

      <div className={styles.cell4}>
        <p className="sectionName">CONTACT US</p>
        <h2>We will be happy to answer your questions</h2>
        <p>
          <br></br>It can take about 24-48 hours from us.
        </p>
        <p>
          <br></br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default FormBlock;
