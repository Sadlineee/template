import Image from 'next/image'
import { employeesData } from '@/data/employeesData'
import { EmployeeCard, EmployeeDataBox, EmployeeName, EmployeeOtherInfo, EmployeePhoto, EmployeesBox, EmployeesTitle } from './Employees.styled'

export default function Employees() {
  return (
    <>
      <EmployeesTitle>Наша команда</EmployeesTitle>
      <EmployeesBox>
        {employeesData.map((el) => (
          <EmployeeCard key={el.id}>
            <EmployeePhoto>
              <Image 
                src={el.photo} 
                alt={`${el.name}` + ' фото'}
                fill={true} 
                quality={80}
                priority
              />
            </EmployeePhoto>
            <EmployeeDataBox>
              <EmployeeName>{el.name}</EmployeeName>
              <hr />
              <EmployeeOtherInfo>{el.role}</EmployeeOtherInfo>
              <EmployeeOtherInfo>{el.experience}</EmployeeOtherInfo>
            </EmployeeDataBox>
          </EmployeeCard>
        ))}
      </EmployeesBox>
    </>
  )
}