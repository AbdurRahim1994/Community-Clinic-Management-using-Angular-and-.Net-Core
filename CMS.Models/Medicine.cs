using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CMS.Models
{
    public class Medicine
    {
        public int MedicineId { get; set; }
        [Required, Display(Name ="Medicine Name"), StringLength(50)]
        public string MedicineName { get; set; }
        [Required, StringLength(50), Display(Name ="Weight Containts")]
        public string WeightContaints { get; set; }
        [Required, StringLength(50)]
        public string MG_ML { get; set; }
        [Required]
        public int Quantity { get; set; }
        [Required, StringLength(20)]
        public string Available { get; set; }

        //Navigation
       //public virtual IList<MedicineStock> MedicineStocks { get; set; }
    }
}
