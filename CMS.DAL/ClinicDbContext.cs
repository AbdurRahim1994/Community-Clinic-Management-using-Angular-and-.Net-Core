using CMS.Models;
using Microsoft.EntityFrameworkCore;
using System;

namespace CMS.DAL
{
    public class ClinicDbContext:DbContext
    {
        public ClinicDbContext(DbContextOptions<ClinicDbContext> options):base(options)
        {

        }
        public DbSet<Service> Services { get; set; }
        public DbSet<Designation> Designations { get; set; }
        public DbSet<Doctor> Doctors { get; set; }
        public DbSet<FollowUp> FollowUps { get; set; }
        public DbSet<Medicine> Medicines { get; set; }
        public DbSet<MedicineStock> MedicineStocks { get; set; }
        public DbSet<Patient> Patients { get; set; }
        public DbSet<PhysicalCheckUp> PhysicalCheckUps { get; set; }
        public DbSet<DoctorService> DoctorServices { get; set; }
        public DbSet<Category> Categories { get; set; }
    }
}
