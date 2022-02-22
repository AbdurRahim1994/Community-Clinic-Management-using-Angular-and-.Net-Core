using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CMS.Models
{
    public class PhysicalCheckUp
    {
        public int PhysicalCheckUpId { get; set; }
        [Required,Display(Name ="Patient Name")]
        public string PatientName { get; set; }
        [Required, Display(Name ="Patient Address")]
        public string PatientAddress { get; set; }
        [Required, DisplayFormat(DataFormatString ="{0:yyyy-MM-dd}",ApplyFormatInEditMode =true),Display(Name ="Check Up Date")]
        public DateTime CheckUpDate { get; set; }

        //Foreign Key
        [ForeignKey("Doctor")]
        public int DoctorId { get; set; }
        [ForeignKey("Service")]
        public int ServiceId { get; set; }
        public string Pressure { get; set; }
        public string HeartBeat { get; set; }
        public string Weight { get; set; }
        public string Observation { get; set; }
        public string TestGiven { get; set; }
        public string Medicine { get; set; }
        public string Advice { get; set; }
        //Navigation 
        public virtual Doctor Doctor { get; set; }
        public virtual Service Service { get; set; }
        public virtual IList<FollowUp> FollowUps { get; set; }
       
    }
}
