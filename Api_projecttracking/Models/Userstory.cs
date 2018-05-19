using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Api_projecttracking.Models
{
    public class Userstory
    {
        [Key]
        public int userstory_id { get; set; }
        public string story { get; set; }

        public int project_id { get; set; }
        [ForeignKey("project_id")]
        public Project fk1 { get; set; }
    }
}