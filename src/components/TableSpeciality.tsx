import { Spinner } from "@nextui-org/spinner";
import React, { useState, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import FormSpeciality from "./FormSpeciality";
import { Form, Input } from "@nextui-org/react";

export default function TableSpeciality() {
  const [submitted, setSubmitted] = React.useState(null);

  const [isFromSpecialityOpen, setIsModalOpen] = useState(false);

  const openSpeciModal = () => setIsModalOpen(true);
  const closeSpeciModal = () => setIsModalOpen(false);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const onSubmit = async (e) => {
    e.preventDefault();

    const data: any = Object.fromEntries(new FormData(e.currentTarget));
    setSubmitted(data);
    console.log(submitted);
    try {
      const response = await fetch("http://127.0.0.1:8000/api/specialities", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitted),
      });

      const createdSpeciality = await response.json();
      console.log("Nueva especialidad creada", createdSpeciality);
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
    closeSpeciModal();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/specialities");

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error al consultar la API:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const eliminar = async (id: number) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/specialities/${id}`,
        {
          method: "DELETE",
        }
      );
      setData(data.filter((item) => item.id !== id));
      console.log("Elemento eliminado");
    } catch (error) {
      console.error("Error al eliminar:", error);
    }
  };

  return (
    <div>
      <FormSpeciality isOpen={isFromSpecialityOpen} onClose={closeSpeciModal}>
        <h2 className="text-lg font-bold">Agregar una nueva especialidad</h2>
        <div className="m-4">
          <Form
            className="w-full max-w-xs"
            validationBehavior="native"
            onSubmit={onSubmit}
          >
            <Input
              isRequired
              label="Nombre"
              labelPlacement="outside"
              name="name"
              placeholder="Ingresa un nombre"
              type="text"
            />

            <Input
              isRequired
              label="Precio"
              labelPlacement="outside"
              name="price"
              placeholder="Ingrese el precio"
              type="number"
            />

            <div className="justify-between">
              <button
                onClick={closeSpeciModal}
                className="m-4 bg-primary-500 text-white px-4 py-2 rounded"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="m-4 bg-green-500 text-white px-4 py-2 rounded"
              >
                Guardar
              </button>
            </div>
          </Form>
        </div>
      </FormSpeciality>

      <div className="flex justify-between">
        <button
          className="bg-green-600 text-white p-2 rounded"
          onClick={openSpeciModal}
        >
          Agregar
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center mt-5">
          <Spinner
            size="lg"
            color="primary"
            label="Cargando..."
            labelColor="primary"
          />
        </div>
      ) : (
        <Table aria-label="collection table" className="mt-5">
          <TableHeader>
            <TableColumn>Nombre</TableColumn>
            <TableColumn>Precio</TableColumn>
            <TableColumn>Opciones</TableColumn>
          </TableHeader>

          <TableBody>
            {data.map((item: any, index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>
                  <button className="bg-blue-500 text-white p-2 rounded mr-2">
                    Horarios
                  </button>

                  <button className="bg-blue-500 text-white p-2 rounded mr-2">
                    Editar
                  </button>
                  <button
                    className="bg-red-500 text-white p-2 rounded"
                    onClick={() => {
                      eliminar(item.id);
                    }}
                  >
                    Eliminar
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
