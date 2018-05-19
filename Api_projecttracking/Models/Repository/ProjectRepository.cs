using Api_projecttracking.common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Api_projecttracking.Models.Repository
{
    public class ProjectRepository
    {
        public List<Project> GetAllProjects()
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();


            return db.Projects.Select(pro => pro).ToList();
        }
        public void CreateNewProject(Project P)
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();


            db.Projects.Add(P);
            db.SaveChanges();
        }


        public Project searchbyid(Project p)
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();


            return (Project)db.Projects.Where(Pro => Pro.project_id == p.project_id).FirstOrDefault();


        }

        public Project searchbyname(Project p)
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();


            return (Project)db.Projects.Where(Pro => Pro.project_name == p.project_name).FirstOrDefault();
        }

        public void DeleteProject(Project p)
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();

            Project pro = db.Projects.Where(pr => pr.project_id == p.project_id).FirstOrDefault();
            db.Projects.Remove(p);
            db.SaveChanges();
        }

        public void Edit(Project p)
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();

            Project p2 = searchbyid(p);
            p.project_name = p2.project_name;
            p.startdate = p2.startdate;
            p.enddate = p2.enddate;
            p.clientname = p2.clientname;

            db.SaveChanges();

        }
    }
}