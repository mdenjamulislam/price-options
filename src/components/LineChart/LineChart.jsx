import { LineChart as LChart, Line } from 'recharts';

const LineChart = () => {
    const studentData = [
        { id: 1, name: "John", math_marks: 85, physics_marks: 78, chemistry_marks: 90, biology_marks: 88, history_marks: 75 },
        { id: 2, name: "Emily", math_marks: 78, physics_marks: 85, chemistry_marks: 92, biology_marks: 80, history_marks: 89 },
        { id: 3, name: "Daniel", math_marks: 92, physics_marks: 88, chemistry_marks: 95, biology_marks: 78, history_marks: 84 },
        { id: 4, name: "Sophia", math_marks: 88, physics_marks: 90, chemistry_marks: 87, biology_marks: 92, history_marks: 79 },
        { id: 5, name: "Michael", math_marks: 95, physics_marks: 92, chemistry_marks: 89, biology_marks: 94, history_marks: 85 },
        { id: 6, name: "Olivia", math_marks: 75, physics_marks: 70, chemistry_marks: 82, biology_marks: 68, history_marks: 76 },
        { id: 7, name: "Matthew", math_marks: 89, physics_marks: 85, chemistry_marks: 91, biology_marks: 87, history_marks: 82 },
        { id: 8, name: "Emma", math_marks: 93, physics_marks: 94, chemistry_marks: 88, biology_marks: 90, history_marks: 91 },
        { id: 9, name: "William", math_marks: 81, physics_marks: 76, chemistry_marks: 80, biology_marks: 78, history_marks: 83 },
        { id: 10, name: "Ava", math_marks: 87, physics_marks: 89, chemistry_marks: 93, biology_marks: 85, history_marks: 88 }
      ];
    
      
    
      
           


    return (
        <div>
            <LChart width={400} height={300} data={studentData}>
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