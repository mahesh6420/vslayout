using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VsLayout.Controllers
{
    public class Dashboard : Controller
    {
     public ActionResult Index()
        {
            return View();
        }   
    }
}
