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
    public class PhysicalCheckUpsController : ControllerBase
    {
        private readonly ClinicDbContext _context;

        public PhysicalCheckUpsController(ClinicDbContext context)
        {
            _context = context;
        }

        // GET: api/PhysicalCheckUps
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PhysicalCheckUp>>> GetPhysicalCheckUps()
        {
            return await _context.PhysicalCheckUps.ToListAsync();
        }

        // GET: api/PhysicalCheckUps/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PhysicalCheckUp>> GetPhysicalCheckUp(int id)
        {
            var physicalCheckUp = await _context.PhysicalCheckUps.FindAsync(id);

            if (physicalCheckUp == null)
            {
                return NotFound();
            }

            return physicalCheckUp;
        }

        // PUT: api/PhysicalCheckUps/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPhysicalCheckUp(int id, PhysicalCheckUp physicalCheckUp)
        {
            if (id != physicalCheckUp.PhysicalCheckUpId)
            {
                return BadRequest();
            }

            _context.Entry(physicalCheckUp).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PhysicalCheckUpExists(id))
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

        // POST: api/PhysicalCheckUps
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<PhysicalCheckUp>> PostPhysicalCheckUp(PhysicalCheckUp physicalCheckUp)
        {
            _context.PhysicalCheckUps.Add(physicalCheckUp);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPhysicalCheckUp", new { id = physicalCheckUp.PhysicalCheckUpId }, physicalCheckUp);
        }

        // DELETE: api/PhysicalCheckUps/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<PhysicalCheckUp>> DeletePhysicalCheckUp(int id)
        {
            var physicalCheckUp = await _context.PhysicalCheckUps.FindAsync(id);
            if (physicalCheckUp == null)
            {
                return NotFound();
            }

            _context.PhysicalCheckUps.Remove(physicalCheckUp);
            await _context.SaveChangesAsync();

            return physicalCheckUp;
        }

        private bool PhysicalCheckUpExists(int id)
        {
            return _context.PhysicalCheckUps.Any(e => e.PhysicalCheckUpId == id);
        }
    }
}
