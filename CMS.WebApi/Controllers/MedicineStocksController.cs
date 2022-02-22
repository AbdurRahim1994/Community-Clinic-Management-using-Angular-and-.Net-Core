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
    public class MedicineStocksController : ControllerBase
    {
        private readonly ClinicDbContext _context;

        public MedicineStocksController(ClinicDbContext context)
        {
            _context = context;
        }

        // GET: api/MedicineStocks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MedicineStock>>> GetMedicineStocks()
        {
            return await _context.MedicineStocks.ToListAsync();
        }

        // GET: api/MedicineStocks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MedicineStock>> GetMedicineStock(int id)
        {
            var medicineStock = await _context.MedicineStocks.FindAsync(id);

            if (medicineStock == null)
            {
                return NotFound();
            }

            return medicineStock;
        }

        // PUT: api/MedicineStocks/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMedicineStock(int id, MedicineStock medicineStock)
        {
            if (id != medicineStock.MedicineStockId)
            {
                return BadRequest();
            }

            _context.Entry(medicineStock).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MedicineStockExists(id))
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

        // POST: api/MedicineStocks
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<MedicineStock>> PostMedicineStock(MedicineStock medicineStock)
        {
            _context.MedicineStocks.Add(medicineStock);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMedicineStock", new { id = medicineStock.MedicineStockId }, medicineStock);
        }

        // DELETE: api/MedicineStocks/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<MedicineStock>> DeleteMedicineStock(int id)
        {
            var medicineStock = await _context.MedicineStocks.FindAsync(id);
            if (medicineStock == null)
            {
                return NotFound();
            }

            _context.MedicineStocks.Remove(medicineStock);
            await _context.SaveChangesAsync();

            return medicineStock;
        }

        private bool MedicineStockExists(int id)
        {
            return _context.MedicineStocks.Any(e => e.MedicineStockId == id);
        }
    }
}
