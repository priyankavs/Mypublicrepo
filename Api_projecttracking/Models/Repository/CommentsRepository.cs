using Api_projecttracking.common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Api_projecttracking.Models.Repository
{
    public class CommentsRepository
    {
        public static void Create(managercomments comment)
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();
            db.Managercomments.Add(comment);
            db.SaveChanges();
        }
        public static void Edit(managercomments comment)
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();
            managercomments c = Search(comment, db);
            c.comments = comment.comments;
            c.projecttask_id = comment.projecttask_id;
            db.SaveChanges();
        }
        public static void Delete(managercomments comment)
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();
            db.Managercomments.Remove(comment);
            db.SaveChanges();
        }
        public static List<managercomments> ShowAll()
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();
            return (db.Managercomments.Select(comment => comment).ToList());
        }
        public static managercomments Search(managercomments comment, ProjectTrackingDbcontext db)
        {
            return (db.Managercomments.Select(s => s).Where(s => s.managercomment_id == comment.managercomment_id)).First();
        }
    }
}
    