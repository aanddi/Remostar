import { BadRequestException, ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { RegisterOwnerDto, RegisterContractorsDto } from './dto/register.dto';

import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { Roles, RolesEmployee } from './types/roles.type';
import { LoginPasswordDto, LoginPhoneDto } from './dto/login.dto';
import { hash, verify } from 'argon2';
import { RefreshTokenDto } from './dto/tokens.dto';
import { otpGenerateDto, otpVerificationDto } from './dto/otp.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  async loginPassword(dto: LoginPasswordDto) {
    const user = await this.prisma.users.findUnique({
      where: {
        phone: dto.phone,
      },
      include: {
        role: true,
        employee: {
          include: {
            employeesRole: true,
          },
        },
      },
    });

    if (!user) throw new BadRequestException('Пользователь с таким номером не зарегистрирован');

    const isValid = await verify(user.password, dto.password);

    if (!isValid) throw new UnauthorizedException('Не верный пароль');

    const tokens = await this.generateTokens(user.id);

    if (user.role.name === Roles.Employee) {
      return {
        user: {
          id: user.id,
          pathImage: user.pathImage,
          employee: {
            employeeId: user.employee.id,
            contractorId: user.employee.contractorId,
          },
          roles: {
            userRole: {
              roleId: user.roleId,
              roleName: user.role.name,
              roleDesc: user.role.desc,
            },
            employeeRole: {
              roleId: user.employee.employeesRoleId,
              roleName: user.employee.employeesRole.name,
              roleDesc: user.employee.employeesRole.name,
            },
          },
        },
        ...tokens,
      };
    }

    return {
      user: {
        id: user.id,
        pathImage: user.pathImage,
        roles: {
          userRole: {
            roleId: user.roleId,
            roleName: user.role.name,
            roleDesc: user.role.desc,
          },
        },
      },
      ...tokens,
    };
  }

  async loginPhone(dto: LoginPhoneDto) {
    const user = await this.prisma.users.findUnique({
      where: {
        phone: dto.phone,
      },
      include: {
        role: true,
        employee: {
          include: {
            employeesRole: true,
          },
        },
      },
    });

    const tokens = await this.generateTokens(user.id);

    if (user.role.name === Roles.Employee) {
      return {
        user: {
          id: user.id,
          pathImage: user.pathImage,
          employee: {
            employeeId: user.employee.id,
            contractorId: user.employee.contractorId,
          },
          roles: {
            userRole: {
              roleId: user.roleId,
              roleName: user.role.name,
              roleDesc: user.role.desc,
            },
            employeeRole: {
              roleId: user.employee.employeesRoleId,
              roleName: user.employee.employeesRole.name,
              roleDesc: user.employee.employeesRole.name,
            },
          },
        },
        ...tokens,
      };
    }

    return {
      user: {
        id: user.id,
        pathImage: user.pathImage,
        roles: {
          userRole: {
            roleId: user.roleId,
            roleName: user.role.name,
            roleDesc: user.role.desc,
          },
        },
      },
      ...tokens,
    };
  }

  async registerOwner(dto: RegisterOwnerDto) {
    const checkUser = await this.prisma.users.findUnique({
      where: {
        phone: dto.phone,
      },
    });

    if (checkUser) throw new BadRequestException('Такой юзер уже зарегистрирован');

    const role = await this.prisma.roles.findUnique({
      where: {
        name: Roles.Owner,
      },
    });

    const newUser = await this.prisma.users.create({
      data: {
        name: dto.name,
        surname: dto.surname,
        phone: dto.phone,
        isLoginPhone: true,
        roleId: role.id,
      },
    });

    const tokens = await this.generateTokens(newUser.id);

    return {
      user: {
        id: newUser.id,
        pathImage: newUser.pathImage,
        roles: {
          userRole: {
            roleId: newUser.roleId,
            roleName: role.name,
            roleDesc: role.desc,
          },
        },
        ...tokens,
      },
    };
  }

  async registerConractor(dto: RegisterContractorsDto) {
    const role = await this.prisma.roles.findUnique({
      where: {
        name: Roles.Employee,
      },
    });

    const roleEmployee = await this.prisma.employeesRoles.findUnique({
      where: {
        name: RolesEmployee.Admin,
      },
    });

    const checkInn = await this.prisma.contractors.findUnique({
      where: {
        inn: dto.inn,
      },
    });

    if (checkInn) throw new BadRequestException('Подрядчик с таким ИНН уже зарегистрирован');

    const newUser = await this.prisma.users.create({
      data: {
        name: dto.name,
        surname: dto.surname,
        gender: dto.gender,
        phone: dto.phoneUser,
        roleId: role.id,
        isLoginPhone: false,
        password: await hash(dto.password),
      },
    });

    const newContractor = await this.prisma.contractors.create({
      data: {
        legalName: dto.legalName,
        name: dto.nameCompany,
        typeCompany: dto.typeCompany,
        mainCity: dto.mainCity,
        phone: dto.phone,
        inn: dto.inn,
        veryfi: false,
      },
    });

    console.log(roleEmployee);

    const newEmployee = await this.prisma.contractorsEmployees.create({
      data: {
        userId: newUser.id,
        contractorId: newContractor.id,
        employeesRoleId: roleEmployee.id,
      },
    });

    const tokens = await this.generateTokens(newUser.id);

    return {
      user: {
        id: newUser.id,
        pathName: newUser.pathImage,
        employee: {
          employeeId: newEmployee.id,
          contractorId: newContractor.id,
        },
        roles: {
          userRole: {
            roleId: role.id,
            roleName: role.name,
            roleDesc: role.desc,
          },
          employeeRole: {
            roleId: roleEmployee.id,
            roleName: roleEmployee.name,
            roleDesc: roleEmployee.desc,
          },
        },
        ...tokens,
      },
    };
  }

  async otpGenerate(dto: otpGenerateDto, user: string) {
    if (user === 'existing') {
      const checkPhone = await this.prisma.users.findUnique({
        where: {
          phone: dto.phone,
        },
      });

      if (!checkPhone) throw new BadRequestException('Пользователь с таким номером не зарегистрирован');

      if (!checkPhone.isLoginPhone) throw new ForbiddenException('Вход по телефону запрещен для этого пользователя');
    }

    // в теории сейчас должен отправляться запрос на сторонний платный api сервис для отправки смс на телефон,
    // этот сервис в теории возвращает id сессии который имеет ограниченное время жизни,
    // для того чтобы потом проверить код, который ввел пользователь

    // отправляем фейк запрос и получаем id сессии
    const sessionSmsId = '432s5d436sdf8dsfsf';

    return {
      phone: dto.phone,
      sessionSmsId: sessionSmsId,
    };
  }

  async otpVerification(dto: otpVerificationDto) {
    // делаем фейк запрос к нашему сервису, передаем туда sessionId и условно получаем валидный код
    const validCode = 47621;

    if (validCode !== dto.code) throw new BadRequestException('Неверный код');

    return {
      phone: dto.phone,
      approved: true,
    };
  }

  async getNewTokens(dto: RefreshTokenDto) {
    const payload = await this.jwt.verifyAsync(dto.refreshToken);

    if (!payload) throw new UnauthorizedException('RefreshToken не валидный');

    const user = await this.prisma.users.findUnique({
      where: {
        id: payload.id,
      },
      include: {
        role: true,
        employee: {
          include: {
            employeesRole: true,
          },
        },
      },
    });

    const tokens = await this.generateTokens(user.id);

    if (user.role.name === Roles.Employee) {
      return {
        user: {
          id: user.id,
          pathImage: user.pathImage,
          employee: {
            employeeId: user.employee.id,
            contractorId: user.employee.contractorId,
          },
          roles: {
            userRole: {
              roleId: user.roleId,
              roleName: user.role.name,
              roleDesc: user.role.desc,
            },
            employeeRole: {
              roleId: user.employee.employeesRoleId,
              roleName: user.employee.employeesRole.name,
              roleDesc: user.employee.employeesRole.name,
            },
          },
        },
        ...tokens,
      };
    }

    return {
      user: {
        id: user.id,
        pathImage: user.pathImage,
        roles: {
          userRole: {
            roleId: user.roleId,
            roleName: user.role.name,
            roleDesc: user.role.desc,
          },
        },
      },
      ...tokens,
    };
  }

  private async generateTokens(userId: string) {
    const payload = { id: userId };

    const accessToken = this.jwt.sign(payload, {
      expiresIn: '15m',
    });

    const refreshToken = this.jwt.sign(payload, {
      expiresIn: '7d',
    });

    return { accessToken, refreshToken };
  }
}
