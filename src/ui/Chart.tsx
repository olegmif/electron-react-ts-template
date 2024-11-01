import {BaseChart} from "./BaseChart.tsx";

export type ChartProps = {
    data: number[];
    maxDataPoints: number;
}

export function Chart(props: ChartProps) {
    let points = props.data.map(point => ({value: point  * 100}));
    if (points.length < props.maxDataPoints) {
        points = [...points, ...Array.from({length: props.maxDataPoints - points.length}).fill(() => ({value: undefined}))];
    }
    return <BaseChart data={points} />
}