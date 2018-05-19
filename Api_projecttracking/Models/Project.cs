using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Api_projecttracking.Models
{
    public class Project
    {
        [Key]
        public int project_id { get; set; }
        public string project_name { get; set; }
        public DateTime startdate { get; set; }
        public DateTime enddate { get; set; }
        public string clientname { get; set; }
    }
}