//@flow
import React from "react";
import { Line, ResponsiveLine } from "@nivo/line";
import styled from "styled-components";
const NivoLinechartContainer = styled.div`
  height: 600px;
`;
const commonProperties = {
  margin: { top: 50, right: 50, bottom: 50, left: 50 },
  animate: true,
  enableSlices: "x" // control the trend line
};
const data = [
  {
    id: "total space",
    color: "#FF8F1C",
    data: [
      { x: "2019-10-01 00:15:00", y: 89 },
      { x: "2019-10-01 00:30:00", y: 90 },
      { x: "2019-10-01 00:45:00", y: 87 },
      { x: "2019-10-01 01:00:00", y: 89 },
      { x: "2019-10-01 01:15:00", y: 99 },
      { x: "2019-10-01 01:30:00", y: 85 },
      { x: "2019-10-01 01:45:00", y: 93 },
      { x: "2019-10-01 02:00:00", y: 98 },
      { x: "2019-10-01 02:15:00", y: 97 },
      { x: "2019-10-01 02:30:00", y: 95 },
      { x: "2019-10-01 02:45:00", y: 98 },
      { x: "2019-10-01 03:00:00", y: 93 },
      { x: "2019-10-01 03:15:00", y: 88 },
      { x: "2019-10-01 03:30:00", y: 94 },
      { x: "2019-10-01 03:45:00", y: 95 },
      { x: "2019-10-01 04:00:00", y: 85 },
      { x: "2019-10-01 04:15:00", y: 82 },
      { x: "2019-10-01 04:30:00", y: 90 },
      { x: "2019-10-01 04:45:00", y: 92 },
      { x: "2019-10-01 05:00:00", y: 93 },
      { x: "2019-10-01 05:15:00", y: 82 },
      { x: "2019-10-01 05:30:00", y: 82 },
      { x: "2019-10-01 05:45:00", y: 91 },
      { x: "2019-10-01 06:00:00", y: 219 },
      { x: "2019-10-01 06:15:00", y: 91 },
      { x: "2019-10-01 06:30:00", y: 83 },
      { x: "2019-10-01 06:45:00", y: 89 },
      { x: "2019-10-01 07:00:00", y: 80 },
      { x: "2019-10-01 07:15:00", y: 299 },
      { x: "2019-10-01 07:30:00", y: 89 },
      { x: "2019-10-01 07:45:00", y: 99 },
      { x: "2019-10-01 08:00:00", y: 99 },
      { x: "2019-10-01 08:15:00", y: 200 },
      { x: "2019-10-01 08:30:00", y: 100 },
      { x: "2019-10-01 08:45:00", y: 86 },
      { x: "2019-10-01 09:00:00", y: 80 },
      { x: "2019-10-01 09:15:00", y: 99 },
      { x: "2019-10-01 09:30:00", y: 89 },
      { x: "2019-10-01 09:45:00", y: 100 },
      { x: "2019-10-01 10:00:00", y: 95 },
      { x: "2019-10-01 10:15:00", y: 88 },
      { x: "2019-10-01 10:30:00", y: 82 },
      { x: "2019-10-01 10:45:00", y: 97 },
      { x: "2019-10-01 11:00:00", y: 95 },
      { x: "2019-10-01 11:15:00", y: 96 },
      { x: "2019-10-01 11:30:00", y: 91 },
      { x: "2019-10-01 11:45:00", y: 92 },
      { x: "2019-10-01 12:00:00", y: 85 },
      { x: "2019-10-01 12:15:00", y: 100 },
      { x: "2019-10-01 12:30:00", y: 86 }
    ]
  },
  {
    id: "used space",
    color: "#228F67",
    data: [
      { x: "2019-10-01 00:15:00", y: 10 },
      { x: "2019-10-01 00:30:00", y: 12 },
      { x: "2019-10-01 00:45:00", y: 30 },
      { x: "2019-10-01 01:00:00", y: 47 },
      { x: "2019-10-01 01:15:00", y: 22 },
      { x: "2019-10-01 01:30:00", y: 15 },
      { x: "2019-10-01 01:45:00", y: 22 },
      { x: "2019-10-01 02:00:00", y: 19 },
      { x: "2019-10-01 02:15:00", y: 43 },
      { x: "2019-10-01 02:30:00", y: 45 },
      { x: "2019-10-01 02:45:00", y: 23 },
      { x: "2019-10-01 03:00:00", y: 21 },
      { x: "2019-10-01 03:15:00", y: 34 },
      { x: "2019-10-01 03:30:00", y: 44 },
      { x: "2019-10-01 03:45:00", y: 18 },
      { x: "2019-10-01 04:00:00", y: 19 },
      { x: "2019-10-01 04:15:00", y: 20 },
      { x: "2019-10-01 04:30:00", y: 24 },
      { x: "2019-10-01 04:45:00", y: 13 },
      { x: "2019-10-01 05:00:00", y: 47 },
      { x: "2019-10-01 05:15:00", y: 41 },
      { x: "2019-10-01 05:30:00", y: 39 },
      { x: "2019-10-01 05:45:00", y: 39 },
      { x: "2019-10-01 06:00:00", y: 44 },
      { x: "2019-10-01 06:15:00", y: 40 },
      { x: "2019-10-01 06:30:00", y: 46 },
      { x: "2019-10-01 06:45:00", y: 17 },
      { x: "2019-10-01 07:00:00", y: 22 },
      { x: "2019-10-01 07:15:00", y: 48 },
      { x: "2019-10-01 07:30:00", y: 48 },
      { x: "2019-10-01 07:45:00", y: 10 },
      { x: "2019-10-01 08:00:00", y: 27 },
      { x: "2019-10-01 08:15:00", y: 22 },
      { x: "2019-10-01 08:30:00", y: 31 },
      { x: "2019-10-01 08:45:00", y: 15 },
      { x: "2019-10-01 09:00:00", y: 31 },
      { x: "2019-10-01 09:15:00", y: 37 },
      { x: "2019-10-01 09:30:00", y: 18 },
      { x: "2019-10-01 09:45:00", y: 10 },
      { x: "2019-10-01 10:00:00", y: 32 },
      { x: "2019-10-01 10:15:00", y: 40 },
      { x: "2019-10-01 10:30:00", y: 13 },
      { x: "2019-10-01 10:45:00", y: 39 },
      { x: "2019-10-01 11:00:00", y: 33 },
      { x: "2019-10-01 11:15:00", y: 28 },
      { x: "2019-10-01 11:30:00", y: 36 },
      { x: "2019-10-01 11:45:00", y: 38 },
      { x: "2019-10-01 12:00:00", y: 18 },
      { x: "2019-10-01 12:15:00", y: 34 },
      { x: "2019-10-01 12:30:00", y: 30 }
    ]
  }
];
function Linechartnivo(props: Props) {
  return (
    <NivoLinechartContainer className="sc-linechartnivo">
      <ResponsiveLine
        {...commonProperties}
        data={data}
        colors={{ datum: "color" }}
        xScale={{
          type: "time",
          format: "%Y-%m-%d %H:%M:%S",
          precision: "minute"
        }}
        xFormat="time:%H:%M"
        axisBottom={{
          orient: "top",
          format: "%H:%M",
          tickValues: "every 1 hour",
          legendOffset: -80,
          legendPosition: "middle"
        }}
        axisLeft={{
          orient: "left"
        }}
        pointSize={2}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        useMesh={true}
        sliceTooltip={({ slice }) => {
          return (
            <div
              style={{
                background: "white",
                padding: "9px 12px",
                border: "1px solid #ccc"
              }}
            >
              <div>{slice.points[0].data.xFormatted}</div>
              {slice.points.map(point => (
                <div
                  key={point.id}
                  style={{
                    color: point.serieColor,
                    padding: "3px 0"
                  }}
                >
                  <strong>{point.serieId}</strong> [{point.data.yFormatted}]
                </div>
              ))}
            </div>
          );
        }}
      />
    </NivoLinechartContainer>
  );
}

export default Linechartnivo;
