using Api_projecttracking.common;
using Api_projecttracking.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Api_projecttracking.Controllers
{
    public class EmployeeController : ApiController
    {
        // GET: api/Employee
        public IEnumerable<Employee> Get()
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();


            return db.Employees.ToList();
            //return new string[] { "value1", "value2" };
        }
        // GET: api/Employee/5
        public Employee Get(int id)
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();
            return db.Employees.Where(emp => emp.employee_id ==id).FirstOrDefault();
           
        }

        // POST: api/Employee
        public void Post(Employee value)
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();
            db.Employees.Add(value);
            db.SaveChanges();
        }

        // PUT: api/Employee/5
        public void Put(int id, Employee value)
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();
            var existingEmp = db.Employees.Where(emp => emp.employee_id == id).FirstOrDefault();
            if(existingEmp!=null)
            {
                existingEmp.employee_name = value.employee_name;
                existingEmp.designation = value.designation;
                existingEmp.manager_id = value.manager_id;
                existingEmp.contact_no = value.contact_no;
                existingEmp.email_id = value.email_id;
                existingEmp.skillsets = value.skillsets; 

            }
            db.SaveChanges();
        }

        // DELETE: api/Employee/5
        public void Delete(int id)
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();

            Employee emp = db.Employees.Where(em => em.employee_id ==id).FirstOrDefault();
            db.Employees.Remove(emp);
            db.SaveChanges();
        }
    }
}
