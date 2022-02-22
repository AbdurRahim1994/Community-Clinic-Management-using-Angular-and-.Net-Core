using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CMS.Models
{
    public class Patient
    {
        public int PatientId { get; set; }
        [Required, StringLength(50), Display(Name ="Patient Name")]
        public string PatientName { get; set; }
        [Required, StringLength(50)]
        public string Address { get; set; }
        [Required]
        public int Age { get; set; }
        [Column(TypeName ="date"), DisplayFormat(DataFormatString ="{0:yyyy-MM-dd}",ApplyFormatInEditMode =true)]
        public DateTime CheckUpDate { get; set; }
        [Required, StringLength(50)]
        public string Observation { get; set; }

        //Foreign Key
        [ForeignKey("Service")]
        public int ServiceId { get; set; }
        [ForeignKey("Doctor")]
        public int DoctorId { get; set; }

        //Navigation
       public virtual Doctor Doctor { get; set; }
       public virtual Service Service { get; set; }
    }
}
