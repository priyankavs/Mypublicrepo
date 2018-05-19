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
    public class ProjectController : ApiController
    {
        // GET: api/Project
        public IEnumerable<Project> Get()
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();


            return db.Projects.ToList();
            //return new string[] { "value1", "value2" };
        }

        // GET: api/Project/5
        public Project Get(int id)
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();
            return db.Projects.Where(pro => pro.project_id == id).FirstOrDefault();

        }


        // POST: api/Project
        public void Post(Project value)
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();
            db.Projects.Add(value);
            db.SaveChanges();
        }
        // PUT: api/Project/5
        public void Put(int id, Project value)
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();
            var existingpro = db.Projects.Where(pro => pro.project_id== id).FirstOrDefault();
            if (existingpro != null)
            {
                existingpro.project_name = value.project_name;
                existingpro.startdate = value.startdate;
                existingpro.enddate = value.enddate;
                existingpro.clientname = value.clientname;


            }
            db.SaveChanges();
        }


        // DELETE: api/Project/5
        public void Delete(int id)
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();

             Project pro = db.Projects.Where(p => p.project_id == id).FirstOrDefault();
            db.Projects.Remove(pro);
            db.SaveChanges();
        }
    }
}
