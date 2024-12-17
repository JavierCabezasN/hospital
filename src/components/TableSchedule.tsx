import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";

export default function TableSchedule() {
  const horarios = [
    { rango: "8:00 - 9:00" },
    { rango: "9:00 - 10:00" },
    { rango: "10:00 - 11:00" },
    { rango: "11:00 - 12:00" },
    { rango: "1:00 - 2:00" },
    { rango: "2:00 - 3:00" },
    { rango: "3:00 - 4:00" },
    { rango: "4:00 - 5:00" },
    { rango: "5:00 - 6:00" },
  ];

  const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

  const handleClick = (hora, dia) => {
    console.log(`Día: ${dia}, Hora: ${hora}`);
  };
  return (
    <Table aria-label="collection table" className="mt-5">
      <TableHeader>
        <TableColumn>Hora / Día</TableColumn>
        {dias.map((dia, index) => (
          <TableColumn key={index}>{dia}</TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {horarios.map((horario, index) => (
          <TableRow key={index}>
            <TableCell>{horario.rango}</TableCell>
            {dias.map((dia, idx) => (
              <TableCell
                key={idx}
                style={{
                  textAlign: "center",
                  cursor: "pointer",
                  padding: "10px",
                }}
              >
                <button
                  style={{
                    width: "100%",
                    padding: "8px",
                    border: "none",
                    backgroundColor: "#f0f0f0",
                    cursor: "pointer",
                  }}
                  onClick={() => handleClick(horario.rango, dia)}
                >
                  {dia} - {horario.rango}
                </button>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
