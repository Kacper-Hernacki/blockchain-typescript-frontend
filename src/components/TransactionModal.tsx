import { useState } from "react";
import styled from "styled-components";
import { Box, Button, Modal } from "../theme/layout/common";
import { useForm, Resolver } from "react-hook-form";

interface TransactionModalProps {
  isOpen: boolean;
  handleClose: any;
}

type FormValues = {
  to: string;
  amount: number;
  type: string;
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

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box>
        <Form onSubmit={onSubmit}>
          <input {...register("to")} placeholder="public key" />
          {errors?.to && <p>{errors.to.message}</p>}

          <input {...register("amount")} placeholder="10" type="number" />

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
