using API.DTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    [HttpPost]
    [ProducesResponseType(StatusCodes.Status201Created)]
    public ActionResult<bool> Login(LoginRequestDTO credentials)
    {
        // TODO
        var response = new LoginResponseDTO();
        response.IsAuthenticated = true;

        return Created(string.Empty, response);
    }
}
