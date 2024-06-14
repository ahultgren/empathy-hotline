import dayjs from "dayjs";
import { ReactElement } from "react";
import styles from "./weekview.module.scss";

export type Event = {
  id: string;
  title: string;
  startDate: Date;
  endDate: Date;
};

export default function WeekView({
  events,
  from = 8,
  to = 17,
}: {
  events: Event[];
  from?: number;
  to?: number;
}): ReactElement {
  return (
    <div className="aspect-square max-h-96 w-full">
      <div className={styles.grid}>
        <div className="empty"></div>
        <Days />
        <Grid from={from} to={to} />
        <Events events={events} from={from} to={to}></Events>
      </div>
    </div>
  );
}

function Events({
  events,
  from,
  to,
}: {
  events: Event[];
  from: number;
  to: number;
}) {
  return (
    <>
      {events.map(({ id, startDate, endDate, title }) => {
        const start = dayjs(startDate);
        const startDay = (start.day() || 7) - 1; // Make 0 Monday
        const startTime = start.hour() - from; // 1-index and header
        const span = dayjs(endDate).diff(start, "hour");

        const style = {
          gridRowEnd: "span " + span,
          ...columnStyle(startDay),
          ...rowStyle(startTime),
        };

        return (
          <div key={id} className={styles.event} style={style}>
            {title}
          </div>
        );
      })}
    </>
  );
}

function Days() {
  return (
    <>
      <div className={styles.day}>Monday</div>
      <div className={styles.day}>Tuesday</div>
      <div className={styles.day}>Wednesday</div>
      <div className={styles.day}>Thursday</div>
      <div className={styles.day}>Friday</div>
      <div className={styles.day}>Saturday</div>
      <div className={styles.day}>Sunday</div>
    </>
  );
}

function Grid({ from, to }: { from: number; to: number }) {
  const rows = [];

  for (let i = 0; i < to - from; i++) {
    rows.push(
      <>
        <div
          key={"hour-" + i}
          className={styles.hour}
          style={{ ...rowStyle(i) }}
        >
          {i + from}:00
        </div>
        <Cells count={7} row={i}></Cells>
      </>
    );
  }

  return <>{rows}</>;
}

function Cells({ count, row }: { count: number; row: number }) {
  return (
    <>
      {Array(count)
        .fill("<></>")
        .map((_, i) => {
          return (
            <div
              key={i}
              className={styles.cell}
              style={{ ...columnStyle(i), ...rowStyle(row) }}
            ></div>
          );
        })}
    </>
  );
}

// TODO This is silly, use styles
const columnStyle = (i: number) => ({ gridColumnStart: i + 2 });
const rowStyle = (i: number) => ({ gridRowStart: i + 2 });
const rowTailwindClasses = [
  "row-start-2",
  "row-start-3",
  "row-start-4",
  "row-start-5",
  "row-start-6",
  "row-start-7",
  "row-start-8",
  "row-start-9",
  "row-start-10",
  "row-start-11",
  "row-start-12",
  "row-start-13",
  "row-start-[14]",
  "row-start-[15]",
  "row-start-[16]",
  "row-start-[17]",
  "row-start-[18]",
  "row-start-[19]",
  "row-start-[20]",
  "row-start-[21]",
  "row-start-[22]",
  "row-start-[23]",
  "row-start-[24]",
  "row-start-[25]",
];
