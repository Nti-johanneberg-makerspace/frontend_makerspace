import { createStyles, Table, Progress, Text, ScrollArea, Center, Group } from '@mantine/core';
import { textState } from '../App';
import { useRecoilState, } from 'recoil';
import { tid } from "./calculation/time"



const useStyles = createStyles((theme) => ({
  progressBar: {
    '&:not(:first-of-type)': {
      borderLeft: `3px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`,
    },
  },
}));


export default function TableReviews() {
  const { classes, theme } = useStyles();
  const [text, _] = useRecoilState(textState);
  const rows = text.map((row) => {
    let time:string = "0";
    let time2:string = "0";
    let time_left:number = 0
    let total_time:number =  0 

    if (row.current_print){
    time_left = (row.current_print.current_time / row.current_print.total_time) * 100;
    total_time =  100 - time_left 
    const total:number = row.current_print.total_time;
    const actual_time_left:number = total -row.current_print.current_time
    time = tid(row.current_print.total_time)
    time2 = tid(actual_time_left)}
    if (time2 === "NaN:NaN"){
      time2 = "0:00"
      time = "0:00"
    }

    return (
      <tr key={row.id}>
        <td >
          <Center>
            {row.name}
          </Center>
        </td>

        <td><Center>{row.state}</Center></td>

        <td>
          <Group position="apart" spacing={0}>
            <Text size="xs" weight={700}>
              Time_left: {time2}
            </Text>
            <Text size="xs" weight={700}>
              Total_time: {time}
            </Text>
          </Group>
          <Progress
            classNames={{ bar: classes.progressBar }}
            sections={[
              {
                value: time_left,
                color: theme.colorScheme === 'dark' ? theme.colors.teal[9] : theme.colors.teal[6],
              },
              {
                value: total_time,
                color: theme.colorScheme === 'dark' ? theme.colors.red[9] : theme.colors.red[6],
              },
            ]}
          />
        </td>
      </tr>
    );
  });

  return (
    <ScrollArea >
      <Table sx={{ minWidth: 800 }} verticalSpacing="xs" highlightOnHover>
        <thead>
          <tr>
            <th>
              <Text align='center'>
                Printer_name
              </Text>
            </th>
            <th>
              <Text align='center'>
                Status
              </Text>
            </th>
            <th>            
              <Text align='center'>
                Time
              </Text>
            </th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}