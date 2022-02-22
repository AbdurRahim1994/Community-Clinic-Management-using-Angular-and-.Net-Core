using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CMS.Models
{
    public class Doctor
    {
        public int DoctorId { get; set; }
        [Required, StringLength(50), Display(Name = "Doctor Name")]
        public string DoctorName { get; set; }
        [Required, StringLength(50)]
        public string Address { get; set; }
        [Required, StringLength(11)]
        public string Contact { get; set; }
        [Required, EmailAddress]
        public string Email { get; set; }
        [Column(TypeName ="date"), DisplayFormat(DataFormatString ="{0:yyyy-MM-dd}",ApplyFormatInEditMode =true)]
        public DateTime Appointed { get; set; }

        //Foreign Key
        [ForeignKey("Designation")]
        public int DesignationId { get; set; }
        [Required, StringLength(50)]
        public string Degree { get; set; }
        [Required, StringLength(50)]
        public string Specialization { get; set; }
        [StringLength(200)]
        public string Picture { get; set; }
        
        //Navigation
        public virtual IList<PhysicalCheckUp> PhysicalCheckUps { get; set; }
        public virtual ICollection<Patient> Patients { get; set; }
        //public virtual ICollection<FollowUp> FollowUps { get; set; }
        public virtual Designation Designation { get; set; }
        
    }
}
