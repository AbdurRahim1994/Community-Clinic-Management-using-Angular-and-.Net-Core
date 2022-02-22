using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace CMS.Models
{
    public class Service
    {
        public int ServiceId { get; set; }
        [Required, StringLength(50), Display(Name ="Disease Name")]
        public string ServiceName { get; set; }
        public string Symptoms { get; set; }
        [Required, StringLength(100), Display(Name = "Treatment Procedure")]
        public string TreatmentProcedure { get; set; }
        [Required, StringLength(50), Display(Name = "Prefered Medicines")]
        public string PreferedMedicines { get; set; }

        //Navigation
        public virtual IList<PhysicalCheckUp> PhysicalCheckUps { get; set; }
        public virtual IList<Patient> Patients { get; set; }
    }
}
