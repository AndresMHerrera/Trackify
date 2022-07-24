using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ProjectsController : ControllerBase
{
    [HttpGet]
    public ActionResult<IEnumerable<ProjectDTO>> GetProjects(Guid userId)
    {
        var result = new List<ProjectDTO>()
        {
            new ProjectDTO() { Id = new Guid(), Name = "Trackify", Description = "This is a task tracking system." },
            new ProjectDTO() { Id = new Guid(), Name = "Shopify", Description = "This is a eCommerce software." },
        };

        return result;
    }
}
