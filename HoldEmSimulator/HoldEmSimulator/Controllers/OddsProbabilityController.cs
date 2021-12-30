namespace HoldEmSimulator.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using System.Collections.Generic;
    
    [ApiController]
    [Route("[controller]")]
    public class OddsProbabilityController : ControllerBase
    {
        [HttpPost]
        public double Post(MyClass my)
        {
            return 14.7;
        }

        public class MyClass
        {
            public IEnumerable<string> MyCards { get; set; }
        }
    }
}
