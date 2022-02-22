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
    public class FollowUpsController : ControllerBase
    {
        private readonly ClinicDbContext _context;

        public FollowUpsController(ClinicDbContext context)
        {
            _context = context;
        }

        // GET: api/FollowUps
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FollowUp>>> GetFollowUps()
        {
            return await _context.FollowUps.ToListAsync();
        }

        // GET: api/FollowUps/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FollowUp>> GetFollowUp(int id)
        {
            var followUp = await _context.FollowUps.FindAsync(id);

            if (followUp == null)
            {
                return NotFound();
            }

            return followUp;
        }

        // PUT: api/FollowUps/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFollowUp(int id, FollowUp followUp)
        {
            if (id != followUp.FollowUpId)
            {
                return BadRequest();
            }

            _context.Entry(followUp).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FollowUpExists(id))
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

        // POST: api/FollowUps
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<FollowUp>> PostFollowUp(FollowUp followUp)
        {
            _context.FollowUps.Add(followUp);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFollowUp", new { id = followUp.FollowUpId }, followUp);
        }

        // DELETE: api/FollowUps/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<FollowUp>> DeleteFollowUp(int id)
        {
            var followUp = await _context.FollowUps.FindAsync(id);
            if (followUp == null)
            {
                return NotFound();
            }

            _context.FollowUps.Remove(followUp);
            await _context.SaveChangesAsync();

            return followUp;
        }

        private bool FollowUpExists(int id)
        {
            return _context.FollowUps.Any(e => e.FollowUpId == id);
        }
    }
}
