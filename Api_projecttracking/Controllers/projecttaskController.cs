using Api_projecttracking.common;
using Api_projecttracking.Models;
using Api_projecttracking.Models.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Api_projecttracking.Controllers
{
    public class projecttaskController : ApiController
    {
        // GET: api/projecttask
        public IEnumerable<projecttask> Get()
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();

            return db.Projecttasks.Select(t => t).ToList();
            //return new string[] { "value1", "value2" };
        }

        // GET: api/projecttask/5
        public projecttask Get(int id)
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();
            return db.Projecttasks.Where(pro => pro.projecttask_id == id).FirstOrDefault();
            //return "value";
        }

        // POST: api/projecttask
        public void Post(projecttask value)
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();
            db.Projecttasks.Add(value);
            db.SaveChanges();
        }

        // PUT: api/projecttask/5
        public void Put(int id, projecttask value)
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();
            var existingptask = db.Projecttasks.Where(ptask => ptask.projecttask_id == id).FirstOrDefault();
            if (existingptask != null)
            {
                existingptask.assignedto = value.assignedto;
                existingptask.taskstartdate = value.taskstartdate;
                existingptask.taskenddate= value.taskenddate;
                existingptask.taskcompletion = value.taskcompletion;
                existingptask.userstory_id = value.userstory_id;
               

            }
            db.SaveChanges();
        }

        // DELETE: api/projecttask/5
        public void Delete(int id)
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();
            projecttask t1 = db.Projecttasks.Where(ta => ta.projecttask_id == id).FirstOrDefault();
            db.Projecttasks.Remove(t1);
            db.SaveChanges();
        }
    }
}
