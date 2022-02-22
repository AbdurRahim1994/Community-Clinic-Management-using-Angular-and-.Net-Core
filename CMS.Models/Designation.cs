using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace CMS.Models
{
    public class Designation
    {
        public int DesignationId { get; set; }
        [Required, StringLength(50), Display(Name = "Position")]
        public string PositionName { get; set; }

        //Navigation
        public virtual IList<Doctor> Doctors { get; set; }
    }
}
