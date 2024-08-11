import { Flex, Input } from 'antd';
import React, { Dispatch, SetStateAction, ChangeEvent, useState } from 'react';

interface InputElementProps {
  setInputValue: Dispatch<SetStateAction<string>>;
}

export default function InputElement({ setInputValue }: InputElementProps) {
  const [inputText, setInputText] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputText(value);
    setInputValue(value);
  };

  return (
    <>
      <Flex vertical>
        <Input
          placeholder="Commentaire"
          variant="filled"
          value={inputText}
          onChange={handleInputChange}
          style={{ height: 50 }}
        />
      </Flex>
    </>
  );
}
