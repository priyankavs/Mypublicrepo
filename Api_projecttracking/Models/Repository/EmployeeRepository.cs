using Api_projecttracking.common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Api_projecttracking.Models.Repository
{
    public class EmployeeRepository
    {
        public List<Employee> GetAllEmployees()
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();


            return db.Employees.Select(emp => emp).ToList();
        }

        public void CreateNewEmployee(Employee e)
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();


            db.Employees.Add(e);
            db.SaveChanges();
        }


        public Employee searchbyid(Employee e, ProjectTrackingDbcontext db)
        {
            //ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();



            return db.Employees.Where(emp => emp.employee_id == e.employee_id).FirstOrDefault();


        }

        public Employee searchbyname(Employee e)
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();


            return db.Employees.Where(emp => emp.employee_name == e.employee_name).FirstOrDefault();
        }

        public void DeleteEmployee(Employee e)
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();


            Employee emp = db.Employees.Where(em => em.employee_id == e.employee_id).FirstOrDefault();
            db.Employees.Remove(emp);
            db.SaveChanges();
        }

        public void Edit(Employee e)
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();

            Employee e1 = searchbyid(e, db);
            e1.employee_name = e.employee_name;
            e1.designation = e.designation;
            e1.manager_id = e.manager_id;
            e1.contact_no = e.contact_no;
            e1.email_id = e.email_id;
            e1.skillsets = e.skillsets;
            db.SaveChanges();

        }
    }
}
   