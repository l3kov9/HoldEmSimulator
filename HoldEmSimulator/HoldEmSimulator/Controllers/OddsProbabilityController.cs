namespace HoldEmSimulator.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using System.Collections.Generic;
    
    [ApiController]
    [Route("[controller]")]
    public class OddsProbabilityController : ControllerBase
    {
        [HttpGet]
        public double Get()
        {
            return 14.7;
        }
    }
}
