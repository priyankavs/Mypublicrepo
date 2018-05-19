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
    public class UserstoryController : ApiController
    {
        // GET: api/Userstory
        public IEnumerable<Userstory> Get()
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();


            return db.Userstories.ToList();
            //return new string[] { "value1", "value2" };
        }

        // GET: api/Userstory/5
        public Userstory Get(int id)
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();
            return db.Userstories.Where(user => user.userstory_id == id).FirstOrDefault();

        }
        // POST: api/Userstory
        public void Post(Userstory value)
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();
            db.Userstories.Add(value);
            db.SaveChanges();
        }

        // PUT: api/Userstory/5
        public void Put(int id, Userstory value)
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();
            var existinguser = db.Userstories.Where(user => user.userstory_id == id).FirstOrDefault();
            if (existinguser != null)
            {
                existinguser.project_id= value.project_id;
                existinguser.story= value.story;
                existinguser.userstory_id = value.userstory_id;

            }
            db.SaveChanges();
        }


        // DELETE: api/Userstory/5
        public void Delete(int id)
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();

            Userstory user = db.Userstories.Where(u=> u.userstory_id == id).FirstOrDefault();
            db.Userstories.Remove(user);
            db.SaveChanges();
        }
    }
}
