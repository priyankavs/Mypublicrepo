using Api_projecttracking.common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Api_projecttracking.Models.Repository
{
    public class UserstoryRepository
    {
        public List<Userstory> GetAllUserstories()
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();

            return db.Userstories.Select(story => story).ToList();
        }
        public void CreateNewUserstory(Userstory u)
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();


            db.Userstories.Add(u);
            db.SaveChanges();
        }


        public Userstory searchbyid(Userstory u)
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();


            return (Userstory)db.Userstories.Where(story => story.userstory_id == u.userstory_id);


        }

        public Userstory searchbyname(Userstory u)
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();

            return (Userstory)db.Userstories.Where(story => story.story == u.story);
        }

        public void DeleteEmployee(Userstory u)
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();


            Userstory user = db.Userstories.Where(story => story.userstory_id == u.userstory_id).FirstOrDefault();
            db.Userstories.Remove(u);
            db.SaveChanges();
        }

        public void Edit(Userstory u)
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();

            Userstory u1 = searchbyid(u);
            u.story = u1.story;

            db.SaveChanges();

        }
    }
}