import { CartesianGrid, LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const studentData = [
        { id: 1, name: "John", math_marks: 66, physics_marks: 78, chemistry_marks: 30, biology_marks: 88, history_marks: 75 },
        { id: 2, name: "Emily", math_marks: 78, physics_marks: 85, chemistry_marks: 48, biology_marks: 80, history_marks: 89 },
        { id: 3, name: "Daniel", math_marks: 92, physics_marks: 57, chemistry_marks: 95, biology_marks: 78, history_marks: 67 },
        { id: 4, name: "Sophia", math_marks: 88, physics_marks: 10, chemistry_marks: 87, biology_marks: 92, history_marks: 79 },
        { id: 5, name: "Michael", math_marks: 34, physics_marks: 92, chemistry_marks: 89, biology_marks: 34, history_marks: 85 },
        { id: 6, name: "Olivia", math_marks: 75, physics_marks: 70, chemistry_marks: 82, biology_marks: 45, history_marks: 76 },
        { id: 7, name: "Matthew", math_marks: 89, physics_marks: 85, chemistry_marks: 91, biology_marks: 87, history_marks: 82 },
        { id: 8, name: "Emma", math_marks: 93, physics_marks: 45, chemistry_marks: 88, biology_marks: 90, history_marks: 91 },
        { id: 9, name: "William", math_marks: 81, physics_marks: 76, chemistry_marks: 80, biology_marks: 78, history_marks: 83 },
        { id: 10, name: "Ava", math_marks: 87, physics_marks: 89, chemistry_marks: 76, biology_marks: 56, history_marks: 88 }
    ];

    const sortedStudentData = [...studentData].sort((a, b) => {
        const subjectMarksA = Object.values(a).filter((value) => typeof value === 'number');
        const subjectMarksB = Object.values(b).filter((value) => typeof value === 'number');
        const sumMarksA = subjectMarksA.reduce((sum, mark) => sum + mark, 0);
        const sumMarksB = subjectMarksB.reduce((sum, mark) => sum + mark, 0);
        return sumMarksA - sumMarksB;
    });

    return (
        <div>
            <LChart width={400} height={300} data={sortedStudentData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <CartesianGrid stroke='#333' strokeDasharray="5 5"></CartesianGrid>
                <Line type="monotone" dataKey="math_marks" stroke='#ff2222'></Line>
                <Line type='monotone' dataKey="physics_marks" stroke='#fff'></Line>
                <Line type='monotone' dataKey="chemistry_marks" stroke='#dcdcdc'></Line>
                <Line type='monotone' dataKey="biology_marks" stroke='#F1C40F'></Line>
                <Line type='monotone' dataKey="history_marks" stroke='#EC00A9'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;