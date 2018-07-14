interface Admin {
  id: string;
  role: string;
}
interface User {
  email: string;
}

function redirect(usr: Admin | User) {
  if ((<Admin>usr).role !== undefined) {
    // won't work: usr is still Admin | User
  }
  if ("role" in usr) {
    routeToAdminPage(usr.role);
  } else {
    routeToHomePage(usr.email);
    usr.email;
  }
}

function isAdmin(usr: Admin | User): usr is Admin {
  return (<Admin>usr).role !== undefined;
}

declare function routeToAdminPage(role: string);
declare function routeToHomePage(id: string);
