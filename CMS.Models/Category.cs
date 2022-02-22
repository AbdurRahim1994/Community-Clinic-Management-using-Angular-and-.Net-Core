using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace CMS.Models
{
    public class Category
    {
        public int CategoryId { get; set; }
        [Required, Display(Name ="Category Name")]
        public string CategoryName { get; set; }

        //Navigation 
        public virtual IList<MedicineStock> MedicineStocks { get; set; }
    }
}
