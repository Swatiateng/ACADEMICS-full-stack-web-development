import react from 'react';

function DepartmentList() {
    const departments = ['HR', 'Engineering', 'Marketing', 'Sales'];
    return (
        <div>  
            <ul>
            {departments.map((department, index) => (
                <li key={index}>{department}</li>       
        ))}    
        </ul>
        </div>
        
    );
}
export default DepartmentList;
