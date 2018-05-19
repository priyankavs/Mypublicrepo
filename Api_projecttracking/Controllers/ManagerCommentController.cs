using Api_projecttracking.common;
using Api_projecttracking.Models;
using Api_projecttracking.Models.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.UI.WebControls;

namespace Api_projecttracking.Controllers
{
    public class ManagerCommentController : ApiController
    {
        // GET: api/ManagerComment
        public IEnumerable<managercomments> Get()
        {
            return CommentsRepository.ShowAll();
        }

        // GET: api/ManagerComment/5
        public managercomments Get(int id)
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();
            managercomments comment = new managercomments();
            comment.managercomment_id = id;
            return CommentsRepository.Search(comment, db);
        }

        // POST: api/ManagerComment
        public void Post(managercomments comment)
        {
            CommentsRepository.Create(comment);
        }

        // PUT: api/ManagerComment/5
        public void Put(int id, managercomments comment)
        {
            comment.managercomment_id = id;
            CommentsRepository.Edit(comment);
        }

        // DELETE: api/ManagerComment/5
        public void Delete(int id)
        {
            ProjectTrackingDbcontext db = new ProjectTrackingDbcontext();
            managercomments com = db.Managercomments.Where(c => c.managercomment_id == id).FirstOrDefault();
            db.Managercomments.Remove(com);
            db.SaveChanges();
           
        }
    }
}
