import { Body, Get, Post, Route } from "tsoa";

@Route('user') // localhost:3000/user
export class Usercontroller {
  
  @Get('get-user')
  public async getUser(): Promise<{name:string, surname:string, age:number}>{
    return await { name: 'John', surname: 'Doe', age:10 };
  }

  @Get('get-users')
  public async getUsers(): Promise<{name:string, surname:string, age:number}[]>{
    return await [
    { 
      name: 'John',
      surname: 'Doe',
      age:10 
    },
    { 
      name: 'Pepe',
      surname: 'Doe',
      age:10 
    },
    { 
      name: 'Javier',
      surname: 'Doe',
      age:10 
    },
    { 
      name: 'Anibal',
      surname: 'Loxi',
      age:25 
    },

    ];
  }

  @Post('create-user')
  public async createUser(
    @Body() body: {name:string, surname:string, age:number}
  ): Promise<{name:string, surname:string, age:number}>{
    console.log('hola me ejecute')
    return await body;
  }
}