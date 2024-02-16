import styles from "./Modal.module.css";
import { BsPlus } from "react-icons/bs";
import { BsCheck } from "react-icons/bs";
import { BsEraser } from "react-icons/bs";
import { InputUser } from "../../Context/InputUserContext";
import { MouseEvent, useState } from "react";

export function MyModal() {
  const {
    itenTable,
    quantityItens,
    contentIten,
    valueIten,
    modalVisible,
    inputTextValue,
    setContentIten,
    setQuantityItens,
    setValueIten,
    setItenTable,
    setModalVisible,
    setInputTextValue,
  } = InputUser();

  const fecharModal = () => {
    setModalVisible(true);
  };

  function handleAddClick(e: MouseEvent<HTMLButtonElement>) {
    if (contentIten != "" || null) {
      e.preventDefault();
      const newItem = parseFloat(inputTextValue);

      if (!isNaN(newItem)) {
        const newArrayValueItens = [...valueIten, newItem];
        setValueIten(newArrayValueItens);
        setItenTable([
          ...itenTable,
          {
            quantity: quantityItens,
            content: contentIten,
            value: newArrayValueItens,
          },
        ]);
      } else {
        alert("Digite um valor valido.");
      }

      setContentIten("");
      setQuantityItens("");
    } else {
      alert("Preencha todos os campos");
    }
  }

  const handleRemoveClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newItenTable = [...itenTable];
    newItenTable.pop();
    setItenTable(newItenTable);
  };

  return modalVisible ? null : (
    <section className={styles.sectionModal}>
      <div className={styles.boxModal}>
        <h3 className={styles.title}>
          Preencha os campos para inserir na tabela:
        </h3>
        <label htmlFor="input1">Quantidade</label>
        <input
          type="text"
          id="input1"
          onChange={(e) => {
            setQuantityItens(e.target.value);
          }}
        />

        <label htmlFor="input2">Serviço</label>
        <input
          type="text"
          id="input2"
          value={contentIten || ""}
          onChange={(e) => {
            setContentIten(e.target.value);
          }}
        />

        <label htmlFor="input3">Valor</label>
        <input
          type="text"
          id="input3"
          onChange={(e) => {
            setInputTextValue(e.target.value);
          }}
        />

        <div className={styles.boxButton}>
          <button className={styles.buttonErase} onClick={handleRemoveClick}>
            <BsEraser />
          </button>
          <button className={styles.buttonAdd} onClick={handleAddClick}>
            <BsPlus />
          </button>
          <button className={styles.buttonSave} onClick={fecharModal}>
            <BsCheck />
          </button>
        </div>
      </div>
    </section>
  );
}
