using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Api_projecttracking.Models
{
    public class projecttask
    {
        [Key]
        public int projecttask_id { get; set; }

        public int assignedto { get; set; }
        [ForeignKey("assignedto")]
        public Employee fk { get; set; }
        public DateTime taskstartdate { get; set; }
        public DateTime taskenddate { get; set; }
        public DateTime taskcompletion { get; set; }

        public int userstory_id { get; set; }
        [ForeignKey("userstory_id")]
        public Userstory fk2 { get; set; }
    }
}