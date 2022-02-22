using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CMS.DAL;
using CMS.Models;

namespace CMS.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorServicesController : ControllerBase
    {
        private readonly ClinicDbContext _context;

        public DoctorServicesController(ClinicDbContext context)
        {
            _context = context;
        }

        // GET: api/DoctorServices
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DoctorService>>> GetDoctorServices()
        {
            return await _context.DoctorServices.ToListAsync();
        }

        // GET: api/DoctorServices/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DoctorService>> GetDoctorService(int id)
        {
            var doctorService = await _context.DoctorServices.FindAsync(id);

            if (doctorService == null)
            {
                return NotFound();
            }

            return doctorService;
        }

        // PUT: api/DoctorServices/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDoctorService(int id, DoctorService doctorService)
        {
            if (id != doctorService.DoctorId)
            {
                return BadRequest();
            }

            _context.Entry(doctorService).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DoctorServiceExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/DoctorServices
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<DoctorService>> PostDoctorService(DoctorService doctorService)
        {
            _context.DoctorServices.Add(doctorService);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (DoctorServiceExists(doctorService.DoctorId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetDoctorService", new { id = doctorService.DoctorId }, doctorService);
        }

        // DELETE: api/DoctorServices/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<DoctorService>> DeleteDoctorService(int id)
        {
            var doctorService = await _context.DoctorServices.FindAsync(id);
            if (doctorService == null)
            {
                return NotFound();
            }

            _context.DoctorServices.Remove(doctorService);
            await _context.SaveChangesAsync();

            return doctorService;
        }

        private bool DoctorServiceExists(int id)
        {
            return _context.DoctorServices.Any(e => e.DoctorId == id);
        }
    }
}
