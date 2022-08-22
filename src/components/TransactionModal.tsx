import { useState } from "react";
import styled from "styled-components";
import { Box, Button, Modal } from "../theme/layout/common";
import { useForm, Resolver } from "react-hook-form";
import axios from "axios";

interface TransactionModalProps {
  isOpen: boolean;
  handleClose: any;
}

type FormValues = {
  to: string;
  amount: number;
  type: string;
};

type CreateTransactionResponse = {
  data: FormValues;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.to ? values : {},
    errors: !values.to
      ? {
          to: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  };
};

export function TransactionModal({
  isOpen,
  handleClose,
}: TransactionModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });

  async function createTransaction({ formData }: any) {
    console.log(formData);
    try {
      const data = axios.post<CreateTransactionResponse>(
        "http://localhost:1337/api/transact",
        { formData },
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
        return error.message;
      } else {
        console.log("unexpected error: ", error);
        return "An unexpected error occurred";
      }
    }
  }

  const onSubmit = handleSubmit((formData) => {
    createTransaction({ formData });
  });

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box>
        <Form onSubmit={onSubmit}>
          <input {...register("to")} placeholder="public key" />
          {errors?.to && <p>{errors.to.message}</p>}

          <input {...register("amount")} placeholder="10" type="number" />

          <input {...register("type")} placeholder="quick-transaction" />

          <Button type="submit">Transact</Button>
        </Form>
      </Box>
    </Modal>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
  }
`;
