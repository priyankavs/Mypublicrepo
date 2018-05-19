using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Api_projecttracking.Models
{
    public class managercomments
    {
       [Key]
        public  int managercomment_id { get; set; }
        public string comments { get; set; }
       
        public int projecttask_id { get; set; }
        [ForeignKey("projecttask_id")]
        public projecttask fk { get; set; }
    }
}