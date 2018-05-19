using Api_projecttracking.common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Api_projecttracking.Models.Repository
{
    public class ProjecttaskRepository
    {
        public class TaskRepository
        {
            public List<projecttask> GetAllTasks()
            {
                ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();

                return db.Projecttasks.Select(t => t).ToList();
            }
            public void CreateNewTask(projecttask t)
            {
                ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();


                db.Projecttasks.Add(t);
                db.SaveChanges();
            }


            public projecttask searchbyid(projecttask t)
            {
                ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();


                return (projecttask)db.Projecttasks.Where(ta => ta.projecttask_id == t.projecttask_id);


            }


            public void Deletetask(projecttask t)
            {
                ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();

                projecttask t1 = db.Projecttasks.Where(ta => ta.projecttask_id == t.projecttask_id).FirstOrDefault();
                db.Projecttasks.Remove(t1);
                db.SaveChanges();
            }

            public void Edit(projecttask t)
            {
                ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();

                projecttask t2 = searchbyid(t);
                t.projecttask_id = t2.projecttask_id;
                t.taskstartdate = t2.taskstartdate;
                t.taskenddate = t2.taskenddate;
                t.taskcompletion = t2.taskcompletion;
                db.SaveChanges();

            }
        }
    }
}
