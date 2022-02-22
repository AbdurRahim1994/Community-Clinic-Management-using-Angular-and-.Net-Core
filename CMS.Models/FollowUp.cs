using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CMS.Models
{
    public class FollowUp
    {
        public int FollowUpId { get; set; }
        [Column(TypeName ="date"), DisplayFormat(DataFormatString ="{0:yyyy-MM-dd}",ApplyFormatInEditMode =true)]
        public DateTime FollowUpDate { get; set; }

        //Foreign Key
        //[ForeignKey("Doctor")]
        //public int DoctorId { get; set; }
        [ForeignKey("PhysicalCheckUp")]
        public int PhysicalCheckUpId { get; set; }
        [Column(TypeName = "date"), DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime CheckUpDate { get; set; }
        public string TestGiven { get; set; }
        public string PreviousMedicine { get; set; }
        [Required, StringLength(200)]
        public string TestResult { get; set; }
        public string Observation { get; set; }
        [Required, StringLength(200)]
        public string UpdatedMedicine { get; set; }
        [Required,StringLength(150)]
        public string Advice { get; set; }

        //Navigation
        //public virtual Doctor Doctor { get; set; }
       public virtual PhysicalCheckUp PhysicalCheckUp { get; set; }
    }
}
