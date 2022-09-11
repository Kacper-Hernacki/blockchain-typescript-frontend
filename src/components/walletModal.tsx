import { useEffect, useState } from "react";
import styled from "styled-components";
import { Box, Button, Modal } from "../theme/layout/common";
import axios from "axios";
import { useForm, Resolver } from "react-hook-form";

interface WalletModalProps {
  isOpen: boolean;
  handleClose: any;
  authentcation: boolean;
  lastlyCreatedWallet: any;
  authenticateWallet: Function;
}

type GetWalletResponse = {
  data: any;
};

type FormValues = {
  privateKey: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.privateKey ? values : {},
    errors: !values.privateKey
      ? {
          privateKey: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  };
};

export function WalletModal({
  isOpen,
  handleClose,
  authentcation,
  lastlyCreatedWallet,
  authenticateWallet,
}: WalletModalProps) {
  const [wallet, setWallet] = useState<any>({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });

  useEffect(() => {
    const controller = new AbortController();

    if (!authentcation) {
    }

    return () => {
      controller.abort();
    };
  }, [wallet]);

  async function getWallet(privateKey: string) {
    try {
      const { data } = await axios.get<GetWalletResponse>(
        `http://localhost:1338/api/wallet?privateKey=${privateKey}`,
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
    getWallet(formData?.privateKey)
      .then((response: any) => {
        setWallet(response);
        authenticateWallet(response);
        handleClose();
      })
      .catch((e) => {
        console.log(e);
      });
  });

  return (
    <Modal open={isOpen} onClose={handleClose}>
      {authentcation ? (
        <StyledBox>
          <Form onSubmit={onSubmit}>
            <input {...register("privateKey")} placeholder="private key" />
            {errors?.privateKey && <p>{errors.privateKey.message}</p>}

            <Button type="submit">Authenticate</Button>
          </Form>
        </StyledBox>
      ) : (
        <StyledBox>
          <Text>
            Public key:<span>{lastlyCreatedWallet?.publicKey} </span>
          </Text>
          <Text>
            Private key: <span>{lastlyCreatedWallet?.privateKey}</span>
          </Text>
          <Text>
            Balance: <span>{lastlyCreatedWallet?.balance}</span>
          </Text>
        </StyledBox>
      )}
    </Modal>
  );
}

const StyledBox = styled(Box)`
  height: 150px;
  width: 400px;
  background-color: #235093b8;
  margin: 10px;
  padding: 10px;
  border-radius: 16px;
  word-wrap: break-word;

  -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
`;

const Text = styled.h6`
  margin-top: 10px;

  span {
    color: #ededed;
    font-weight: 500;
  }
`;

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
