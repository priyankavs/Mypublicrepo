using Api_projecttracking.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace Api_projecttracking.common
{
    public class ProjectTrackingDbcontext : DbContext
    {
       



            public ProjectTrackingDbcontext() : base("Data Source=DESKTOP-NQF259R\\SQLEXPRESS;Initial Catalog=Angular;Integrated Security=True")
            {
            this.Configuration.LazyLoadingEnabled = false;
            this.Configuration.ProxyCreationEnabled = false;

            }
            public DbSet<Employee> Employees { get; set; }
            public DbSet<Project> Projects { get; set; }
            public DbSet<Userstory> Userstories { get; set; }
            public DbSet<projecttask> Projecttasks { get; set; }

           // public DbSet<Task> projecttasks { get; set; }
            //public object Tasks { get; internal set; }
            public DbSet<managercomments> Managercomments { get; set; }
        }
    }
