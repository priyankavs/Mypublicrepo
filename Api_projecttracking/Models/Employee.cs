using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Api_projecttracking.Models
{
    public class Employee
    {

        [Key]
        public int employee_id { get; set; }
        [Required(ErrorMessage = "Please enter employee name.")]
        public string employee_name { get; set; }
        [Required]
        public string designation { get; set; }


        public int? manager_id { get; set; }
        [ForeignKey("manager_id")]
        [System.Runtime.Serialization.IgnoreDataMember]
        public Employee fk { get; set; }
        [Required]
        public string contact_no { get; set; }
        [Required]
        public string email_id { get; set; }
        [Required]
        public string skillsets { get; set; }
       
    }
}
    

