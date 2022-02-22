using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CMS.Models
{
    public class DoctorService
    {
        [Key]
        [ForeignKey("Doctor")]
        public int DoctorId { get; set; }
        [ForeignKey("Service")]
        public int ServiceId { get; set; }

        //Navigation
        public virtual Doctor Doctor { get; set; }
        public virtual Service Service { get; set; }
    }
}
